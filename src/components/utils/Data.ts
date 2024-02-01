import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'razorpay Clone',
    techStack: 'HTML, CSS, Tailwind,',
    imageUrl: 'razorpay.png',
    href: 'https:razorpay-clone-red.vercel.app',
  },
  {
    id: 2,
    title: 'StudyNotion',
    techStack:
      'HTML, Tailwind CSS, React, Javascript, Nodejs, ExpressJs, Moongoose, MongoDB',
    imageUrl: 'studyNotion.png',
    href: 'https://studynotion-frontend.vercel.app/',
  },
  {
    id: 3,
    title: 'Medilocker',
    techStack:
    'HTML, Tailwind CSS, React, Javascript, Nodejs, ExpressJs, Moongoose, MongoDB',
    imageUrl: 'medilocker.png',
    href: 'https://medilocker.vercel.app/SingUP',
  },
  {
    id: 4,
    title: ' RockAsia',
    techStack: 'HTML, CSS, ReactJS',
    imageUrl: 'rockasia.png',
    href: 'https:rock-asia-1.vercel.app',
  },
  {
    id: 4,
    title: ' Niswarth',
    techStack: 'HTML, CSS, ReactJS',
    imageUrl: 'niswarth.png',
    href: 'https:ngo-niswarth-ngo.vercel.app/',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Ez Clothing',
    techStack: 'Next.js 13, Drizzle, PostgreSql, Docker, ShadCn',
    icon: 'shirt',
    href: 'https://github.com/nwaliaez/ezClothing',
  },
  {
    id: 2,
    title: 'Ethereum Lottery',
    techStack: 'Solidity, Ethers, Hardhat, Chai',
    icon: 'lottery',
    href: 'https://github.com/nwaliaez/HardhatLottery',
  },
  {
    id: 3,
    title: 'File Sharing App',
    techStack: 'Node js, Express, Web Sockets, WebRTC, ReactJs',
    icon: 'share',
    href: 'https://github.com/nwaliaez/filetransfer-webrtc',
  },

  {
    id: 4,
    title: 'Snake Game',
    techStack: 'Next.js 13, Tailwind CSS, Typescript',
    icon: 'game',
    href: 'https://snake-nwaliaez.vercel.app/',
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  // {
  //   id: 5,
  //   title: 'Nextjs 13',
  //   src: '/tech/frontend/nextjs13.jpeg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 80,
  // },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  // {
  //   id: 3,
  //   title: 'DenoJs',
  //   src: '/tech/backend/denojs.webp',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 60,
  // },
  // {
  //   id: 4,
  //   title: 'Next Auth',
  //   src: '/tech/backend/nextauth.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 90,
  // },
  // {
  //   id: 5,
  //   title: 'PHP',
  //   src: '/tech/backend/php.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  // {
  //   id: 3,
  //   title: 'Redis',
  //   src: '/tech/database/redis.jpeg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 4,
  //   title: 'PostgreSQL',
  //   src: '/tech/database/postgres.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 5,
  //   title: 'Elastic Search',
  //   src: '/tech/database/elasticSearch.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'React Native',
    src: '/tech/devops/redux.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
},

{
    id: 3,
    title: 'Redux',
    src: '/tech/devops/images.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
},
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
},
{
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
},
{
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
},
{
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
},
{
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
},
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
},
];
