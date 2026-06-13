import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  SiLaravel, SiReact, SiJavascript, SiTailwindcss,
  SiMysql, SiHtml5, SiGit, SiFigma, SiPhp, SiPython,
  SiAngular, SiTypescript, SiGitlab, SiJira, SiExpress, SiNextdotjs,
} from 'react-icons/si';

const skills = [
  { name: 'Laravel / PHP', level: 85, color: 'from-red-500 to-orange-400' },
  { name: 'React.js',      level: 80, color: 'from-cyan-500 to-blue-500' },
  { name: 'Express.js',   level: 70, color: 'from-gray-500 to-gray-700' },
  { name: 'Next.js',      level: 79, color: 'from-zinc-600 to-black' },
  { name: 'JavaScript',    level: 80, color: 'from-yellow-400 to-amber-500' },
  { name: 'Tailwind CSS',  level: 88, color: 'from-cyan-400 to-teal-500' },
  { name: 'MySQL',         level: 75, color: 'from-blue-500 to-indigo-600' },
  { name: 'HTML / CSS',    level: 92, color: 'from-orange-400 to-red-500' },
  { name: 'Git',           level: 75, color: 'from-orange-500 to-red-600' },
  { name: 'GitLab',        level: 81, color: 'from-orange-400 to-red-400' },
  { name: 'Figma',         level: 65, color: 'from-purple-500 to-pink-500' },
  { name: 'Python',        level: 50, color: 'from-blue-400 to-yellow-400' },
  { name: 'SonarQube',     level: 78, color: 'from-sky-500 to-blue-600' },
  { name: 'Jira',          level: 75, color: 'from-blue-600 to-indigo-500' },
  { name: 'Angular',       level: 0,  color: 'from-red-600 to-pink-500', learning: true },
  { name: 'TypeScript',    level: 0,  color: 'from-blue-500 to-cyan-400', learning: true },
];

const techIcons = [
  { icon: SiLaravel,    name: 'Laravel',     color: '#FF2D20', bg: '#FFF5F5' },
  { icon: SiReact,      name: 'React',       color: '#61DAFB', bg: '#F0FBFF' },
  { icon: SiPhp,        name: 'PHP',         color: '#777BB4', bg: '#F4F4FF' },
  { icon: SiMysql,      name: 'MySQL',       color: '#4479A1', bg: '#F0F7FF' },
  { icon: SiGit,        name: 'Git',         color: '#F05032', bg: '#FFF4F2' },
  { icon: SiTailwindcss,name: 'Tailwind',    color: '#06B6D4', bg: '#F0FEFF' },
  { icon: SiJavascript, name: 'JavaScript',  color: '#F7DF1E', bg: '#FFFDE7' },
  { icon: SiFigma,      name: 'Figma',       color: '#F24E1E', bg: '#FFF4F2' },
  { icon: SiPython,     name: 'Python',      color: '#3776AB', bg: '#F0F7FF' },
  { icon: ShieldCheck,  name: 'SonarQube',   color: '#4E9BCD', bg: '#F0F8FF', isLucide: true },
  { icon: SiGitlab,     name: 'GitLab',      color: '#FC6D26', bg: '#FFF4EE' },
  { icon: SiJira,       name: 'Jira',        color: '#0052CC', bg: '#EEF4FF' },
  { icon: SiAngular,    name: 'Angular',     color: '#DD0031', bg: '#FFF0F0' },
  { icon: SiTypescript, name: 'TypeScript',  color: '#3178C6', bg: '#EEF6FF' },
  { icon: SiExpress,    name: 'Express.js',  color: '#333333', bg: '#F5F5F5' },
  { icon: SiNextdotjs,  name: 'Next.js',     color: '#000000', bg: '#F2F2F2' },
];

function SkillBar({ name, level, color, index, inView, learning }) {
  const { t } = useTranslation();
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2 flex-wrap gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: '#3f3f46' }}>{name}</span>
          {learning && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full animate-pulse"
              style={{ background: 'linear-gradient(135deg,rgba(234,88,12,0.12),rgba(219,39,119,0.12))', color: '#ea580c', border: '1px solid rgba(234,88,12,0.25)' }}>
              {t('skills.learning')}
            </span>
          )}
        </div>
        {!learning && (
          <motion.span
            className="text-xs font-mono"
            style={{ color: '#a1a1aa' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            {level}%
          </motion.span>
        )}
      </div>
      <div className="h-[3px] w-full rounded-full" style={{ background: 'rgba(0,0,0,0.08)' }}>
        {learning ? (
          <div
            className={`h-full rounded-full bg-gradient-to-r ${color} opacity-40`}
            style={{ width: '30%', backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }}
          />
        ) : (
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          {/* Skill bars */}
          <div ref={ref}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-black mb-4 leading-tight" style={{ color: '#111111' }}>
              {t('skills.title1')}<span className="text-gradient">{t('skills.title_gradient')}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 text-base leading-relaxed" style={{ color: '#71717a' }}>
              {t('skills.subtitle')}
            </motion.p>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                  <SkillBar {...skill} index={i} inView={inView} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech icon grid */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {techIcons.map(({ icon: Icon, name, color, bg }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  background: bg,
                  border: `1px solid ${color}22`,
                  animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <Icon size={28} style={{ color }} />
                <span className="text-xs font-semibold text-center leading-tight" style={{ color: '#52525b' }}>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
