import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Globe, Database } from 'lucide-react';

const passionIcons = [
  { icon: Code2,    key: 'passion1', bg: '#EFF6FF', border: '#BFDBFE', ic: '#2563eb' },
  { icon: Globe,    key: 'passion2', bg: '#ECFDF5', border: '#A7F3D0', ic: '#059669' },
  { icon: Database, key: 'passion3', bg: '#FFF7ED', border: '#FED7AA', ic: '#ea580c' },
];

export default function About() {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="w-full section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>
            {t('about.label')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-black leading-tight mb-8" style={{ color: '#111111' }}>
              {t('about.title1')}<span className="text-gradient">{t('about.title_gradient')}</span>{t('about.title2')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-5"
              style={{ color: '#71717a' }}
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
            />
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-10"
              style={{ color: '#71717a' }}
              dangerouslySetInnerHTML={{ __html: t('about.p2') }}
            />

            {/* Passion cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {passionIcons.map(({ icon: Icon, key, bg, border, ic }) => (
                <div key={key}
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-default"
                  style={{ background: bg, border: `1px solid ${border}` }}>
                  <Icon size={17} style={{ color: ic }} />
                  <span className="text-sm font-semibold" style={{ color: '#3f3f46' }}>{t(`about.${key}`)}</span>
                </div>
              ))}
            </motion.div>

            {/* Soft skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-4" style={{ color: '#a1a1aa' }}>
                {t('about.softSkillsTitle')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t('about.softSkills', { returnObjects: true }).map((skill, i) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-default"
                    style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', color: '#52525b' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.color = '#2563eb'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#52525b'; }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Terminal */}
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', background: '#FAFAFA' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono mx-auto" style={{ color: '#a1a1aa' }}>bash ~ zakaria</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3" style={{ background: '#FAFAFA' }}>
                <div>
                  <span style={{ color: '#059669' }}>zakaria</span>
                  <span style={{ color: '#a1a1aa' }}>@portfolio</span>
                  <span style={{ color: '#3f3f46' }}>:~$ </span>
                  <span style={{ color: '#18181b' }}>whoami</span>
                </div>
                <div style={{ color: '#2563eb' }} className="font-semibold">Zakaria Lemchaouri</div>
                <div>
                  <span style={{ color: '#059669' }}>zakaria</span>
                  <span style={{ color: '#a1a1aa' }}>@portfolio</span>
                  <span style={{ color: '#3f3f46' }}>:~$ </span>
                  <span style={{ color: '#18181b' }}>./status</span>
                </div>
                <div className="space-y-1.5" style={{ color: '#52525b' }}>
                  <div><span style={{ color: '#2563eb' }}>Role:</span> Full Stack Developer</div>
                  <div><span style={{ color: '#2563eb' }}>Stack:</span> Laravel + React</div>
                  <div><span style={{ color: '#2563eb' }}>Location:</span> Rabat, Morocco 🇲🇦</div>
                  <div><span style={{ color: '#2563eb' }}>Status:</span> <span style={{ color: '#059669' }}>Open ✓</span></div>
                </div>
                <div className="flex items-center">
                  <span style={{ color: '#059669' }}>zakaria</span>
                  <span style={{ color: '#a1a1aa' }}>@portfolio</span>
                  <span style={{ color: '#3f3f46' }}>:~$ </span>
                  <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ background: '#71717a' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
