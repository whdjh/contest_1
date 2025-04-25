'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cards } from '@/mock/cards';

export default function MainSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section className="flex flex-wrap justify-center items-center min-h-screen p-4">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative m-2 flex flex-col justify-end bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-all duration-500 ${
            activeIndex === index ? 'w-70 h-48 md:w-80 md:h-96' : 'w-10 h-20 md:w-40 md:h-60'
          }`}
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => setActiveIndex(index)}
        >
          <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 rounded-lg"></div>
          <div className="relative p-4 text-white">
            <div className="flex items-center space-x-2">
              <i className={`${card.icon} text-xl`}></i>
              <div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
