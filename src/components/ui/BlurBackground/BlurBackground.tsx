'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import './blur.css'; 

export default function BlurBackground() {
  useEffect(() => {
    const random = (min: number, max: number) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const randomX = random(-400, 400);
    const randomY = random(-1400, 1400); // 기존 -200, 200 → 더 넓힘
    const randomTime = random(3, 6);     // 기존 6~12s → 3~6s로
    const randomTime2 = random(2, 4);    // 회전 속도도 살짝 줄이기
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray<HTMLElement>('.blur');
    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomY(1),
        rotation: randomAngle(-1),
      });

      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });

    function rotate(target: HTMLElement, direction: number) {
      gsap.to(target, {
        duration: randomTime2(),
        rotation: randomAngle(direction),
        ease: 'sine.inOut',
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target: HTMLElement, direction: number) {
      gsap.to(target, {
        duration: randomTime(),
        x: randomX(direction),
        ease: 'sine.inOut',
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target: HTMLElement, direction: number) {
      gsap.to(target, {
        duration: randomTime(),
        y: randomY(direction),
        ease: 'sine.inOut',
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }
  }, []);

  return (
    <section>
      <div className="blur" />
      <div className="blur" />
      <div className="blur" />  
      <div className="blur" />  
      <div className="blur" />
    </section>
  );
}
