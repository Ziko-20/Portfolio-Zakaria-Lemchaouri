import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Light particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,235,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37,99,235,${0.04 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', opacity: 0.7 }} />;
}

// Profile photo with glow frame
function ProfileCard({ availableLabel }) {
  const [imgError, setImgError] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: 900 }} className="relative">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-fit animate-float"
      >
        {/* Spinning gradient ring */}
        <div className="absolute -inset-[3px] rounded-3xl animate-spin-slow z-0"
          style={{ background: 'conic-gradient(from 0deg, #2563eb, #7c3aed, #db2777, #2563eb)', filter: 'blur(2px)' }} />
        {/* Glow */}
        <div className="absolute -inset-3 rounded-3xl z-0"
          style={{ background: 'conic-gradient(from 0deg, #2563eb, #7c3aed, #db2777, #2563eb)', filter: 'blur(20px)', opacity: 0.2 }} />

        {/* Image wrapper */}
        <div className="relative z-10 rounded-3xl overflow-hidden"
          style={{ background: '#F0F0F2', border: '1px solid rgba(0,0,0,0.08)' }}>
          {!imgError ? (
            <img
              src="/profile.jpg"
              alt="Zakaria Lemchaouri"
              className="block w-[240px] sm:w-[280px] md:w-[320px]"
              style={{ height: 'auto', display: 'block' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[320px] sm:h-[360px] flex flex-col items-center justify-center gap-5"
              style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)' }}>
              <div className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-display font-black"
                style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.15),rgba(124,58,237,0.15))', border: '2px solid rgba(37,99,235,0.3)', color: '#2563eb' }}>
                ZL
              </div>
            </div>
          )}
        </div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -bottom-4 -right-4 z-20 px-4 py-2 rounded-2xl shadow-lg"
          style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold" style={{ color: '#18181b' }}>{availableLabel}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <ParticleCanvas />

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(37,99,235,0.04) 0%, transparent 80%)`,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex w-fit items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563eb' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              {t('hero.available')}
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants}
            className="font-display font-black tracking-tight leading-[1.05] mb-4"
            style={{ color: '#111111', fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            <span className="block">Zakaria</span>
            <span className="block text-gradient">Lemchaouri</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-[2px] rounded-full hidden lg:block" style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }} />
              <span className="text-lg md:text-xl font-display font-semibold" style={{ color: '#3f3f46' }}>
                {/* <TypeAnimation
                  sequence={['Full Stack Developer', 2000, 'Étudiant CS', 2000]}
                  repeat={Infinity} speed={50}
                /> */}
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light"
            style={{ color: '#71717a' }}>
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14 justify-center lg:justify-start">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
              {t('hero.explore')}
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="/cv.pdf"
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:shadow-md"
              style={{ background: '#fff', color: '#18181b', border: '1.5px solid rgba(0,0,0,0.1)' }}>
              {t('hero.cv')}
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
            <a href="https://github.com/Ziko-20" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl transition-all hover:shadow-sm"
              style={{ border: '1.5px solid rgba(0,0,0,0.1)', color: '#52525b', background: '#fff' }}>
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/zakaria-lemchaouri" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl transition-all hover:shadow-sm"
              style={{ border: '1.5px solid rgba(0,0,0,0.1)', color: '#2563eb', background: '#fff' }}>
              <Linkedin size={17} />
            </a>
            <a href="mailto:lemchaourizakaria1@gmail.com"
              className="text-xs font-mono ml-2 hover:underline transition-colors hidden sm:inline"
              style={{ color: '#a1a1aa' }}>
              lemchaourizakaria1@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <ProfileCard availableLabel={t('hero.availableBadge')} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#a1a1aa' }}>{t('hero.scroll')}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} style={{ color: '#a1a1aa' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
