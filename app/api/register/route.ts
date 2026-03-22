import { NextResponse } from 'next/server';
import { appendToSheet } from '@/app/lib/google-sheets';
import { EVENTS } from '@/app/data/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, formData } = body;

    // 1. Basic Validation
    if (!eventId || !formData || typeof formData !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid payload. Missing eventId or formData.' },
        { status: 400 }
      );
    }

    // 2. Fetch Event Configuration
    const event = EVENTS.find((e) => e.id === Number(eventId));
    if (!event) {
      return NextResponse.json(
        { success: false, message: 'Event not found.' },
        { status: 404 }
      );
    }

    if (!event.googleSheetId) {
      return NextResponse.json(
        { success: false, message: 'Registration is not configured for this event. Please contact the admin.' },
        { status: 500 }
      );
    }

    // 3. Format Data for Google Sheets
    // The columns will match the order of `event.formFields` plus a Timestamp at the start
    const orderedValues: string[] = [new Date().toISOString()];
    
    // If the admin has defined specific form fields, we extract them in order.
    // If not, we just append all keys of formData alphabetically as a fallback.
    if (event.formFields && event.formFields.length > 0) {
      for (const field of event.formFields) {
        orderedValues.push(formData[field.name]?.toString() || '');
      }
    } else {
      // Fallback
      Object.keys(formData)
        .sort()
        .forEach((key) => {
          orderedValues.push(formData[key]?.toString() || '');
        });
    }

    // 4. Append to Sheet
    // Appending to Sheet1 by default. The admin can name their tab "Sheet1"
    const range = 'Sheet1!A:A'; 
    await appendToSheet(event.googleSheetId, range, [orderedValues]);

    return NextResponse.json(
      { success: true, message: 'Successfully registered!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred during registration.' },
      { status: 500 }
    );
  }
}
