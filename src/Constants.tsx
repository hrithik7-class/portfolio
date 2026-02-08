import React from 'react';
import {

  Github,
  Linkedin,
  Twitter,

} from 'lucide-react';

import {
  FaReact,
  FaNodeJs,

  FaDocker,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFramer,
  SiVercel,
  SiMysql
} from 'react-icons/si';
import { Project, BlogPost, SkillCategory } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Luck My Trip',
    description: ` Built and deployed a full-featured Admin Panel using the MERN stack, implementing role
based authentication for Admin, SuperAdmin, and Content Creator roles.`,
    tags: ['React.js', 'MongoDB', 'Framer Motion', 'Express.js', 'Redux-toolkit', 'PayU Payment', 'JWT Auth', 'Clodinary'],
    image: '/images/showcastImg1.jpeg',
    link: 'https://www.theluckmytrip.com/',
    github: '#'
  },
  {
    id: '2',
    title: 'Doctor Refer',
    description: `Developed a personalized client-doctor referral platform enabling clients to refer to professional
doctors, while a third party can transparently view both sides of the referral transaction. Designed and integrated
an admin dashboard to monitor all activities and ensure smooth operations across the system.`,
    tags: ['React/Next.js', 'TypeScript', 'MongoDb', 'Vercel', 'Hostinger', 'JWT Auth', 'Tailwind CSS'],
    image: '/images/showcastImg2.png',
    link: 'https://www.docrefer.in/',
    github: '#'
  },
  {
    id: '3',
    title: 'stripe payment Integration',
    description: `Secure payment processing module built with Next.js App Router, Stripe for 
    seamless checkout flows, and Kinde authentication—enabling protected subscription handling
     and user-specific billing in modern web apps.`,
    tags: ['TypeScript', 'Tailwind css', 'Stripe', 'Framer', 'Kinde Auth', 'Next.js'],
    image: '/images/showcastImg3.jpeg',
    link: 'https://stripe-flax-zeta.vercel.app',
    github: '#'
  },
  {
    id: '4',
    title: 'Findme Metrimony WebApp',
    description: `Created a full-featured marriage matrimony platform that allows users to find their
    perfect match with complete control over their profiles and interactions. Implemented secure payment
    integration, responsive UI/UX, and scalable backend architecture to enhance overall user engagement and trust.`,
    tags: ['TypeScript', 'Tailwind css', 'Framer', 'Jwt Auth', 'REACT/Next.js', 'Prisma', 'Postgresql', 'Clodinary'],
    image: '/images/showcastImg4.jpeg',
    link: 'https://matrimony-iota.vercel.app/',
    github: '#'
  }, {
    id: '5',
    title: 'Quik Serv Technology',
    description: `This website is built with modern web technologies to provide a fast, smooth, and 
    secure booking experience. Seamless navigation, responsive design, and secure Razorpay payments 
    ensure hassle-free service from start to finish.`,
    tags: ['JavaScript', 'Tailwind css', 'Framer-motion', 'Razor Pay', 'REACT' , 'React-Router-Dom'],
    image: '/images/showcastImg55.png',
    link: 'https://ticket-link.vercel.app',
    github: '#'
  },
   {
    id: '6',
    title: 'Aroma Frenchise',
    description: `This website presents a transparent, data-backed franchise opportunity designed 
    for modern operators. It clearly explains the 3-brand business model, investment structure, 
    and profit potential to help entrepreneurs make informed decisions.`,
    tags: ['TypeScript', 'Tailwind css', 'Framer-motion', 'Node-mailer', 'REACT/Next.js' , 'React-icons'],
    image: '/images/showcastImg6.png',
    link: 'https://franchise.aromachai.in',
    github: '#'
  },
  {
    id: '7',
    title: 'FundRaise Portal',
    description: `Secure payment processing module built with Next.js App Router, Stripe for 
    seamless checkout flows, and Kinde authentication—enabling protected subscription handling
     and user-specific billing in modern web apps.`,
    tags: ['React', 'Tailwind css', 'Framer', 'Jwt Auth', 'Javascript', 'MongoDB'],
    image: '/images/showcastImg7.png',
    link: 'https://matrimony-iota.vercel.app/',
    github: '#'
  },
  {
    id: '8',
    title: 'E-Commerce WebApp',
    description: `A web-based fundraising portal that enables users to raise funds transparently while 
    tracking every contribution in real time. The platform maintains detailed records of each user’s 
    fundraising progress and automatically rewards participants based on their performance, ensuring trust,
     motivation, and engagement throughout the campaign.`,
    tags: ['React', 'Tailwind css', 'Framer', 'Redis', 'Javascript', 'MongoDB', 'JWT Auth', 'Stripe', 'Clodinary'],
    image: '/images/showcastImg8.jpeg',
    link: 'https://mern-e-commerce-web.onrender.com/',
    github: '#'
  },


];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Scaling Distributed Systems with Event Sourcing',
    excerpt: 'Deep dive into My Amezing experience in Web Development and thing that i learn until now.',
    date: 'may 31, 2025',
    readTime: '12 min read',
    category: 'Web Development'
  },
  // {
  //   id: '2',
  //   title: 'The Art of Micro-Animations in React',
  //   excerpt: 'How to use Framer Motion to create delightful user experiences without sacrificing performance.',
  //   date: 'Dec 20, 2023',
  //   readTime: '8 min read',
  //   category: 'UX/UI'
  // }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    skills: [
      { name: 'React / Next.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-zinc-500" /> },
    ]
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: 'MySql', icon: <SiMysql className="text-[#E10098]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    ]
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
      { name: 'AWS Cloud', icon: <FaAws className="text-[#FF9900]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-zinc-900 dark:text-white" /> },
      { name: 'Git Systems', icon: <FaGitAlt className="text-[#F05032]" /> },
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/hrithik7-class?tab=repositories' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/ritik-kesarwani-212699318/' },
  { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://x.com/kesarwani_65148?t=5-JL7AVTEyPrQvg7renWnw&s=08' },
];


