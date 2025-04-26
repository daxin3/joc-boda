'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function ConfettiReal() {
  useEffect(() => {
    // Crear canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    // 🎶 Crear i reproduir so
    const audio = new Audio('/joc-boda/potter_celebration_low.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.error('No es pot reproduir l\'audio:', err));

    // 🎊 Funció per disparar confetti en una direcció concreta
    const fire = (angle: number) => {
      myConfetti({
        angle: angle,
        spread: 60,
        startVelocity: 60,
        particleCount: 100,
        origin: { y: 0.8 },
        scalar: 1,
        gravity: 0.8,
      });
    };

    // 🎉 Disparar 3 tirs amb diferent angle
    fire(60); // tir cap a l'esquerra
    setTimeout(() => fire(120), 400); // tir cap a la dreta
    setTimeout(() => fire(90), 800); // tir cap amunt

    // 🧹 Netegem
    const timeout = setTimeout(() => {
      canvas.remove();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      canvas.remove();
    };
  }, []);

  return null;
}
