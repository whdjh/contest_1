'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Image from 'next/image';

gsap.registerPlugin(Draggable);

export default function RotateSection() {
  const itemsRef = useRef<HTMLDivElement>(null);

  const images = [
    '/image/1.jpeg',
    '/image/2.jpeg',
    '/image/3.jpg',
    '/image/4.jpeg',
    '/image/5.jpeg',
    '/image/6.jpeg',
    '/image/7.jpeg',
    '/image/8.jpg',
  ];

  useEffect(() => {
    const imageElements = gsap.utils.toArray('.item') as HTMLElement[];
    const imageSize = imageElements.length;
    const degree = 360 / imageSize;

    const timeline = gsap.timeline();

    imageElements.forEach((image, index) => {
      const sign = Math.floor((index / 2) % 2) ? 1 : -1;
      const value = Math.floor((index + 4) / 4) * 4;
      const rotation = index > imageSize - 3 ? 0 : sign * value;

      gsap.set(image, {
        rotation,
        scale: 0.5,
      });

      timeline.from(
        image,
        {
          x: () =>
            index % 2
              ? window.innerWidth + image.clientWidth * 4
              : -window.innerWidth - image.clientWidth * 4,
          y: () => window.innerHeight - image.clientHeight,
          rotation: index % 2 ? 200 : -200,
          scale: 4,
          opacity: 1,
          ease: 'power4.out',
          duration: 1,
          delay: 0.15 * Math.floor(index / 2),
        },
        0,
      );

      const rotationAngle = index * degree;

      timeline.to(
        image,
        { scale: 1, duration: 0 },
        0.15 * (imageSize / 2 - 1) + 1,
      );

      timeline.to(
        image,
        {
          transformOrigin: 'center 200vh',
          rotation:
            index > imageSize / 2
              ? -degree * (imageSize - index)
              : rotationAngle,
          duration: 1,
          ease: 'power1.out',
        },
        0.15 * (imageSize / 2 - 1) + 1,
      );
    });

    let start = 0;

    Draggable.create('.items', {
      type: 'rotation',
      throwProps: true,
      edgeResistance: 0.65,
      onDragStart: function () {
        start = this.rotation;
      },
      onDragEnd: function () {
        const rotation = this.rotation;
        const offset = Math.abs(rotation - start);

        if (offset < degree / 8) {
          gsap.to('.items', { rotation: 0, duration: 0.5 });
        } else {
          gsap.to('.items', {
            rotation:
              rotation > start
                ? `+=${degree - offset}`
                : `-=${degree - offset}`,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      },
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-black ">
      <div className="absolute top-[14%] left-1/2 -translate-x-1/2 h-screen select-none flex flex-col gap-20">
        <p className="md:text-5xl text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text shadow-lg">
          CareerBot 
        </p>

        <div
          className="items relative w-full h-full flex"
          style={{ transformOrigin: 'center 200vh', transform: 'rotate(0deg)' }}
          ref={itemsRef}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="item absolute left-1/2 top-0 transform -translate-x-1/2 cursor-pointer select-none"
            >
              <div className="card border-[10px] border-black dark:border-white rounded-[17px] overflow-hidden cursor-grab relative w-[300px] h-[300px] sm:w-[350px] sm:h-[497px] max-h-[90vh]">
                <Image
                  src={src}
                  alt={`rotating-${idx}`}
                  layout="fill"
                  objectFit="cover"
                  className=" pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
