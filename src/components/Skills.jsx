import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  SiLaravel, SiReact, SiJavascript, SiTailwindcss,
  SiMysql, SiHtml5, SiGit, SiFigma, SiPhp, SiPython,
  SiGitlab, SiJira, SiExpress, SiNextdotjs, SiDocker, SiMongodb,
} from 'react-icons/si';

export default function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const categorizedSkills = [
    {
      titleKey: 'skills.categories.backend',
      skills: [
        { name: 'Laravel / PHP', level: 4, icon: SiLaravel, color: '#FF2D20' },
        { name: 'Express.js', level: 3, icon: SiExpress, color: '#333333' },
        { name: 'Python', level: 2, icon: SiPython, color: '#3776AB' },
        { name: 'MySQL', level: 4, icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', level: 3, icon: SiMongodb, color: '#47A248' },
      ]
    },
    {
      titleKey: 'skills.categories.frontend',
      skills: [
        { name: 'HTML / CSS', level: 5, icon: SiHtml5, color: '#E34F26' },
        { name: 'React.js', level: 4, icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', level: 4, icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 4, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', learning: true },
      ]
    },
    {
      titleKey: 'skills.categories.tools',
      skills: [
        { name: 'Git', level: 4, icon: SiGit, color: '#F05032' },
        { name: 'GitLab', level: 4, icon: SiGitlab, color: '#FC6D26' },
        { name: 'Jira', level: 3, icon: SiJira, color: '#0052CC' },
        { name: 'SonarQube', level: 4, icon: ShieldCheck, color: '#4E9BCD', isLucide: true },
        { name: 'Figma', level: 3, icon: SiFigma, color: '#F24E1E' },
        { name: 'Docker', level: 2, icon: SiDocker, color: '#2496ED' },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="skills" className="w-full section-pad relative">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-16">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>
            {t('skills.label')}
          </span>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-black mb-4 leading-tight" style={{ color: '#111111' }}>
            {t('skills.title1')}<span className="text-gradient">{t('skills.title_gradient')}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed max-w-2xl" style={{ color: '#71717a' }}>
            {t('skills.subtitle')}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categorizedSkills.map((category) => (
            <motion.div
              key={category.titleKey}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col gap-6"
            >
              <h3 className="text-sm font-mono font-bold tracking-wider uppercase pb-3 border-b border-zinc-100" style={{ color: '#3f3f46' }}>
                {t(category.titleKey)}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center justify-between py-1 group/skill">
                      <div className="flex items-center gap-3">
                        <Icon size={18} style={{ color: skill.color }} className="flex-shrink-0 transition-transform duration-300 group-hover/skill:scale-110" />
                        <span className="text-sm font-medium transition-colors duration-300 text-zinc-700 group-hover/skill:text-zinc-900">{skill.name}</span>
                      </div>
                      {skill.learning ? (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 animate-pulse uppercase tracking-wide">
                          {t('skills.learning')}
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5" role="img" aria-label={t('skills.outOfFive', { count: skill.level })}>
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <span
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx < skill.level ? 'bg-blue-600' : 'bg-zinc-200'
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
