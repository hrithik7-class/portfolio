'use client';

import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
import {useState} from 'react'


type Props={
  name:string,
  email:string,
  message:string
}

export default function ContactPage() {
  const [sendMsg , setSendMessage] = useState<Props | null>(null)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-32 pb-20 px-4 min-h-screen bg-white dark:bg-black"
    >
      <Contact sendMsg={sendMsg} setSendMessage={setSendMessage}/>
    </motion.div>
  );
}
