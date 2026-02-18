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
  // {
  //   id: 1,
  //   name: 'Alex Johnson',
  //   role: 'President',
  //   image: '/api/placeholder/400/400', // Replace with real image path
  //   linkedin: '#',
  // },
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
