import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function TiltCard({ children, className }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);


  const allProjects = [
    {
      id: 5, title: t('projects.items.p5_title'), category: 'web',
      categoryLabel: t('projects.categories.web'),
      description: t('projects.items.p5_desc'), image: '/project5.png',
      tags: ['Node.js', 'Express.js', 'HTML5', 'CSS3', 'JavaScript', 'Groq API'],
      liveLink: 'https://zakaria-s-chatbot.vercel.app/',
      githubLink: 'https://github.com/Ziko-20/Zakaria-s-Chatbot',
      accentColor: '#10b981', inProgress: false,
    },
    {
      id: 1, title: t('projects.items.p1_title'), category: 'web',
      categoryLabel: t('projects.categories.web'),
      description: t('projects.items.p1_desc'), image: '/project1.png',
      tags: ['Laravel 11', 'Livewire', 'MySQL', 'Tailwind'],
      liveLink: 'https://github.com/Ziko-20/GestionClients-Abonnements',
      githubLink: 'https://github.com/Ziko-20/GestionClients-Abonnements',
      accentColor: '#FF2D20', inProgress: false,
    },
    {
      id: 2, title: t('projects.items.p2_title'), category: 'web',
      categoryLabel: t('projects.categories.web'),
      description: t('projects.items.p2_desc'), image: '/project2.png',
      tags: ['React', 'JavaScript', 'localStorage', 'Tailwind'],
      liveLink: 'https://to-do-react-xi-smoky.vercel.app/',
      githubLink: 'https://github.com/Ziko-20/To-do-React.git',
      accentColor: '#61DAFB', inProgress: false,
    },
    {
      id: 3, title: t('projects.items.p3_title'), category: 'fullstack',
      categoryLabel: t('projects.categories.fullstack'),
      description: t('projects.items.p3_desc'), image: '/project3.png',
      video: '/SmartShop.mp4',
      tags: ['React', 'Vite', 'Laravel 13', 'Sanctum', 'MySQL', 'REST API'],
      liveLink: 'https://github.com/Ziko-20/TechStore',
      githubLink: 'https://github.com/Ziko-20/TechStore',
      accentColor: '#7c3aed', inProgress: false,
    },
    {
      id: 4, title: t('projects.items.p4_title'), category: 'fullstack',
      categoryLabel: t('projects.categories.fullstack'),
      description: t('projects.items.p4_desc'), image: '/project4.png',
      tags: ['Laravel', 'React', 'MySQL', 'Full Stack'],
      liveLink: 'https://github.com/Ziko-20',
      githubLink: 'https://github.com/Ziko-20',
      accentColor: '#059669', inProgress: true,
    },
  ];


  return (
    <section id="projects" className="w-full section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>Projects</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight" style={{ color: '#111111' }}>
              {t('projects.title1')}<span className="text-gradient">{t('projects.title_gradient')}</span>
            </h2>
            <p className="text-base mt-4 max-w-lg" style={{ color: '#71717a' }}>{t('projects.subtitle')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {[...allProjects].reverse().map((project, i) => (
            <motion.div key={project.id} layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <TiltCard className="h-full">
                <div className="h-full glass-card overflow-hidden flex flex-col group transition-all duration-500"
                  style={{ '--accent': project.accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 16px 48px ${project.accentColor}22`; e.currentTarget.style.borderColor = `${project.accentColor}25`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = ''; }}>
                  {/* Media: video for SmartShop, image for others */}
                  <div className="relative aspect-video overflow-hidden group/media cursor-pointer" style={{ background: '#F4F4F5' }}
                       onClick={() => project.video && setSelectedVideo(project.video)}>
                    {project.video ? (
                      <>
                        <video
                          src={project.video}
                          className="w-full h-full object-cover"
                          muted loop playsInline preload="metadata"
                          onMouseEnter={(e) => e.target.play()}
                          onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                        />
                        {/* Play hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover/media:opacity-0 transition-opacity duration-300 pointer-events-none">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                            style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      project.image && (
                        <img src={project.image} alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      )
                    )}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)' }} />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', color: '#52525b', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                        {project.categoryLabel}
                      </span>
                      {project.inProgress && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#059669' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          En cours
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 leading-tight transition-colors duration-300" style={{ color: '#111111' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#71717a' }}>{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                          style={{ background: '#F4F4F5', color: '#71717a', border: '1px solid rgba(0,0,0,0.06)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <a href={project.liveLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold transition-colors"
                        style={{ color: '#a1a1aa' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                        <ExternalLink size={13} /> Live / Demo
                      </a>
                      <span style={{ color: '#e4e4e7' }}>·</span>
                      <a href={project.githubLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold transition-colors"
                        style={{ color: '#a1a1aa' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#18181b'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                        <Github size={13} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-14">
          <a href="https://github.com/Ziko-20" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 group"
            style={{ background: '#fff', border: '1.5px solid rgba(0,0,0,0.1)', color: '#52525b', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.color = '#2563eb'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = '#52525b'; }}>
            <Github size={18} />
            {t('projects.viewAll')}
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <video src={selectedVideo} controls autoPlay className="w-full h-full outline-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
