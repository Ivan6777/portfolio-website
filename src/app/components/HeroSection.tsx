import { useRef, useEffect, useState } from 'react';
import profileImage from '../../assets/ivan.jpg';
import { motion } from 'motion/react';
import { ShineBorder } from '@/components/ui/shine-border';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Particle configuration
    const particleCount = 120; // Increased for denser network
    const connectionDistance = 150;
    const mouseDistance = 250; // Increased interaction range

    // Theme detection
    const isDark = document.documentElement.classList.contains('dark');
    const colors = ['#00C2CB', '#8B5CF6', '#F97316', '#84CC16']; // Brand colors

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, // Slow random movement
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      // Check theme on each frame or rely on a listener? Frame is easiest for dynamic switch without reload
      // But heavy. Let's assume theme is mostly static or just read CSS var?
      // For performance, we'll just check CSS class occasionally or use a generic distinct color.
      // Light mode: background white -> lines need to be darkish?
      // Dark mode: background dark -> lines need to be light.
      const isDarkMode = document.documentElement.classList.contains('dark');

      ctx.clearRect(0, 0, width, height);

      // Update and Draw Particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect to Mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseDistance) {
          ctx.beginPath();
          ctx.strokeStyle = isDarkMode ? `rgba(255, 255, 255, ${0.4 * (1 - distMouse / mouseDistance)})` : `rgba(0, 0, 0, ${0.2 * (1 - distMouse / mouseDistance)})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Connect to other particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            // Line opacity based on distance
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = isDarkMode ? `rgba(255, 255, 255, ${opacity * 0.3})` : `rgba(0, 0, 0, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-5 md:px-[120px] pt-16 md:pt-0 bg-white dark:bg-transparent transition-colors duration-300 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="font-['Montserrat'] text-sm md:text-base tracking-widest text-gray-500 dark:text-gray-400 mb-4 uppercase">
            For Your Learning Hub
          </p>
          <h1 className="font-['Montserrat'] font-bold text-[36px] md:text-[64px] leading-[1.1] tracking-tight mb-6 dark:text-white">
            Visualizing
            <br />
            Intelligence.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            To make an impact, tell a story. Driven and proud. I create visualizations that move!
          </p>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[var(--cyan-turquoise)] text-white font-['Montserrat'] font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            Explore Work
          </motion.a>
        </motion.div>

        {/* Photo Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div
            className="relative w-full max-w-[400px] aspect-square"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--cyan-turquoise)] to-[var(--purple-accent)] rounded-3xl opacity-20 blur-2xl -z-10 transform rotate-6"></div>
            <ShineBorder
              className="w-full h-full p-1 rounded-3xl bg-transparent"
              color={isHovered ? ['#FF0000', '#00FF00', '#0000FF'] : ['#ffffff', '#ffffff']}
              borderWidth={2}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </ShineBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
