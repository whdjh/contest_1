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
            activeIndex === index ? 'w-80 h-96' : 'w-40 h-60'
          }`}
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => setActiveIndex(index)}
        >
          <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 rounded-lg"></div>
          <div className="relative p-4 text-white">
            <div className="flex items-center space-x-2">
              <i className={`${card.icon} text-xl`}></i>
              <div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
