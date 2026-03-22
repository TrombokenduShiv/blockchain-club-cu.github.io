'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { EVENTS } from '@/app/data/constants';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string | React.ReactNode;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hi there! I am the BCCU Assistant. How can I help you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message immediately
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: option };
    setMessages((prev) => [...prev, userMsg]);

    // Process bot response asynchronously to feel like real chat
    setTimeout(() => {
      let botResponse: Message;

      if (option === 'What is this club?') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Blockchain Club CU is a student-led community focused on learning Blockchain and Web3 from fundamentals to real-world use.',
        };
      } else if (option === 'Contact Info') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: (
            <span>
              You can reach us at blockchainclub@cuchd.in or join our{' '}
              <a 
                href="https://chat.whatsapp.com/CXY53ovXAas7bWBfwRnEsa?utm_source=website"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 dark:text-[#10F480] underline font-bold"
              >
                WhatsApp Community!
              </a>
            </span>
          ),
        };
      } else if (option === 'Active Events') {
        // Dynamically grab events logic (no backend)
        const upcomingEvents = EVENTS.filter((event) => {
          const eventDate = new Date(event.date);
          if (isNaN(eventDate.getTime())) return true;
          eventDate.setHours(23, 59, 59, 999);
          return eventDate.getTime() >= Date.now();
        });

        if (upcomingEvents.length > 0) {
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: (
              <div className="space-y-4">
                <p>We have {upcomingEvents.length} active event(s):</p>
                {upcomingEvents.map((e) => (
                  <div key={e.id} className="p-3 border border-gray-200 dark:border-white/10 rounded-lg bg-white dark:bg-white/5 shadow-sm">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 font-mono">{e.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{e.description}</p>
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-2 bg-[#10F480] text-[#1C1C1C] text-xs font-bold rounded hover:bg-[#0dd66f] transition-colors"
                    >
                      Register for the Event
                    </a>
                  </div>
                ))}
              </div>
            ),
          };
        } else {
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'We are currently brewing something special... No active events right now. Check back soon!',
          };
        }
      } else {
         botResponse = {
           id: (Date.now() + 1).toString(),
           sender: 'bot',
           text: "I'm a simple bot and don't understand custom questions yet! Please use the buttons below.",
         }
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Fallback response for custom typed text
    handleOptionClick(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-[320px] sm:w-[350px] h-[500px] bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#10F480]/20 flex items-center justify-center text-[#10F480]">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono text-sm text-gray-900 dark:text-white">BCCU Assistant</h3>
                    <p className="text-[10px] text-[#10F480] font-mono">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#10F480] text-[#1C1C1C] rounded-tr-sm'
                          : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-gray-100 rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Options */}
              <div className="p-3 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1C1C1C]">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['What is this club?', 'Active Events', 'Contact Info'].map(
                    (opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-mono text-gray-600 dark:text-gray-300 hover:border-[#10F480] hover:text-emerald-500 dark:hover:text-[#10F480] transition-colors"
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="flex gap-2 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask something..."
                    className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#10F480] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-full bg-[#10F480] text-[#1C1C1C] flex items-center justify-center hover:bg-[#0dd66f] transition-colors shrink-0"
                  >
                    <Send size={16} className="-ml-1" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle FAB */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#10F480] text-[#1C1C1C] rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(16,244,128,0.4)] flex items-center justify-center transition-shadow relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};
