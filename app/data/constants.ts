interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
}

interface MemberItem {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

interface AboutItem {
  titie: string;
  description?: string;
}

export const TEAM_MEMBERS: MemberItem[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'President',
    image: '/api/placeholder/400/400', // Replace with real image path
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Tech Lead',
    image: '/api/placeholder/400/400',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Mike Ross',
    role: 'Event Manager',
    image: '/api/placeholder/400/400',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Marketing Head',
    image: '/api/placeholder/400/400',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Test test',
    role: 'Marketing Head',
    image: '/api/placeholder/400/400',
    linkedin: '#',
  },
];

export const EVENTS: EventItem[] = [
  // {
  //   id: 1,
  //   title: 'Intro to Smart Contracts',
  //   date: 'March 15, 2024',
  //   time: '2:00 PM - 4:00 PM',
  //   location: 'Block 3, Room 405',
  //   description:
  //     'Learn the basics of Solidity and deploy your first smart contract on the Ethereum testnet.',
  //   status: 'Upcoming',
  // },
  // {
  //   id: 2,
  //   title: 'Web3 Career Roadmap',
  //   date: 'March 22, 2024',
  //   time: '5:00 PM',
  //   location: 'Virtual (Discord)',
  //   description:
  //     'Industry experts share insights on how to land a job in the Web3 ecosystem.',
  //   status: 'Registration Open',
  // },
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
