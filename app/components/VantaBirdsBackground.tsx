'use client';

import { useEffect, useRef } from 'react';
declare global {
  interface Window {
    VANTA: {
      BIRDS: (options: Record<string, unknown>) => void;
    };
  }
}



export default function VantaBirdsBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // สร้าง <script> เพื่อโหลด Vanta และ Three.js จาก CDN
        const addScript = (src: string) =>
            new Promise<void>((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject();
                document.body.appendChild(script);
            });

        const initVanta = async () => {
            await addScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
            await addScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');

            
            if (window.VANTA && vantaRef.current) {
                
                window.VANTA.BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0x0,
                    color1: 0xffffff,
                    colorMode: "lerp",
                    birdSize: 1.30,
                    wingSpan: 40.00,
                    speedLimit: 2.00,
                    separation: 85.00,
                    alignment: 88.00,
                    cohesion: 91.00,
                    quantity: 2.00
                });
            }
        };

        initVanta();

        // ไม่ต้อง clean up เพราะ load ผ่าน script CDN
    }, []);

    return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}
