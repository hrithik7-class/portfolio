'use client';

import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';


interface Props {
  name: string;
  email: string;
  message: string;
}

interface ContactProps {
  sendMsg: Props | null;
  setSendMessage: React.Dispatch<React.SetStateAction<Props | null>>;
}

const Contact: React.FC<ContactProps> = ({ setSendMessage }) => {
  const [formData, setFormData] = useState<Props>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message)
      return toast.error('Please fill all the fields');

    try {
      setLoading(true);

      const res = await fetch('/api/emailService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setSendMessage(formData);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully')
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message')
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-12">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Have a project in mind?</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I work with startups and growing companies to deliver reliable, scalable digital products. Available for freelance projects and full-time roles.          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Drop an email</p>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">kesarwaniraj11@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Location</p>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">vashi, Navi mumbai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-500/5"
        >
          <form className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border"
            />

            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your vision..."
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              {loading ? 'Sending...' : 'Start Conversation'}
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
