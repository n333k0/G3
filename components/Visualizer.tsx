import React, { useEffect, useRef } from 'react';
import { PI_DIGITS, THEME } from '../constants';

const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      // Clear with a slight fade for trail effect, or pure black for sharp lines
      // Using pure black for the "techno" feel
      ctx.fillStyle = THEME.colors.black;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(Math.max(scrollY / (maxScroll || 1), 0), 1);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Initial State: The Dot
      const baseRadius = 4;
      const pulse = Math.sin(Date.now() * 0.005) * 2;
      
      ctx.fillStyle = THEME.colors.white;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius + (scrollProgress < 0.1 ? pulse : 0), 0, Math.PI * 2);
      ctx.fill();

      // If scrolled, start drawing the Pi Walk
      if (scrollProgress > 0.01) {
        // Number of digits to show depends on scroll
        const totalDigits = PI_DIGITS.length;
        const visibleDigits = Math.floor(scrollProgress * totalDigits);
        
        // Style for lines
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        let currentX = centerX;
        let currentY = centerY;
        
        // Dynamic scale - zooms out as we add more lines to keep it visible
        const scale = Math.max(10 - (scrollProgress * 8), 2); 

        for (let i = 0; i < visibleDigits; i++) {
          const digit = parseInt(PI_DIGITS[i]);
          
          // Map digit 0-9 to an angle (36 degrees per digit)
          // Adding a spiral factor based on index to make it swirl
          const angle = (digit * 36) * (Math.PI / 180) + (i * 0.002);
          
          const length = scale * (1 + (digit * 0.2)); // Irrational length variation

          const nextX = currentX + Math.cos(angle) * length;
          const nextY = currentY + Math.sin(angle) * length;

          ctx.lineTo(nextX, nextY);
          currentX = nextX;
          currentY = nextY;
        }
        ctx.stroke();

        // Draw the "Current" head
        ctx.fillStyle = THEME.colors.neonRed;
        ctx.shadowBlur = 20;
        ctx.shadowColor = THEME.colors.neonRed;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
        
        // Connect back to center occasionally for the "Mandala" effect shown in reference
        // Only do this if we are fairly deep in the scroll
        if (scrollProgress > 0.2) {
             ctx.strokeStyle = `rgba(220, 38, 38, 0.1)`; // Faint red
             ctx.beginPath();
             ctx.moveTo(centerX, centerY);
             ctx.lineTo(currentX, currentY);
             ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <canvas ref={canvasRef} className="block" />
      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default Visualizer;