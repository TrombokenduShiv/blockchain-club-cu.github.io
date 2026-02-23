interface EventItem {
  id: number;
  title: string;
  imageURL: string;
  imageDarkURL: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
  link: string;
}

interface MemberItem {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

interface AboutItem {
  title: string;
  description?: string;
}

export const TEAM_MEMBERS: MemberItem[] = [
  // {
  //   id: 1,
  //   name: 'Alex Johnson',
  //   role: 'President',
  //   image: '/api/placeholder/400/400', // Replace with real image path
  //   linkedin: '#',
  // },
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: `TRANSFORMING INDUSTRY PAIN-POINTS INTO STARTUP SOLUTIONS WITH AI & BLOCKCHAIN`,
    imageURL: 'event_posters/TransformingIndustry_26_02_2026_light.png',
    imageDarkURL: 'event_posters/TransformingIndustry_26_02_2026_dark.png',
    date: 'February 26, 2026',
    time: '9:00 AM - 4:30 PM',
    location: 'B3, Seminar Hall',
    description:
      `Learn how real-world industry problems can be turned into scalable startup
ideas using AI and Blockchain technologies.`,
    status: 'Upcoming',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeL0Fw4Mo3nC54h2HQJEQNrVeHbKJp6yqog3waiyMY78ouDQA/viewform',
  },
];

export const ABOUT_CARDS = [
  {
    title: 'Learn',
    description:
      'Master blockchain fundamentals, Solidity, Rust, and Web3 development through hands-on workshops.',
  },
  {
    title: 'Build',
    description:
      'Participate in hackathons and build real-world dApps that solve actual problems.',
  },
  {
    title: 'Connect',
    description:
      'Network with industry leaders, alumni, and like-minded peers passionate about decentralization.',
  },
];
