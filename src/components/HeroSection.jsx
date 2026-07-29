import {
  ArrowDownRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  GraduationCap,
  Globe2,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react'

export function HeroSection({ goTo }) {
  return (
    <section id='home' className='hero hero-with-cv'>
      <div className='hero-copy reveal'>
        <p className='eyebrow'>
          <Sparkles size={14} /> Mid-Level Frontend Developer · Naxa Pvt. Ltd.
        </p>
        <h1>
          Making complex
          <br />
          <em>feel effortless.</em>
        </h1>
        <p className='hero-intro'>
          I’m Uzzwal Maharjan, a Frontend Developer with 3+ years of experience
          building scalable React & TypeScript platforms, geospatial web-GIS
          dashboards, and component architectures for government and
          international development clients.
        </p>

        <div className='hero-actions'>
          <button className='button button-dark' onClick={() => goTo('work')}>
            Explore my work <ArrowDownRight size={18} />
          </button>
          <a className='text-link' href='mailto:ujolmaharjan94@gmail.com'>
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>

        <div className='hero-quick-stats'>
          <div>
            <strong>3+ Years</strong>
            <span>Crafting Production Software</span>
          </div>
          <div className='stat-divider' />
          <div>
            <strong>4 Platforms</strong>
            <span>Shipped for Gov & INGOs</span>
          </div>
          <div className='stat-divider' />
          <div>
            <strong>B.Sc. CSIT</strong>
            <span>Computer Science Graduate</span>
          </div>
        </div>
      </div>

      <div className='hero-cv-card reveal' aria-label='Developer Overview Card'>
        <div className='cv-card-header'>
          <span className='cv-status-badge'>
            <span className='pulse-dot' /> Lead Frontend Architecture @ Naxa
          </span>
          <span className='cv-location'>
            <MapPin size={13} /> Kathmandu, Nepal
          </span>
        </div>

        <div className='cv-card-body'>
          <div className='cv-role-title'>
            <h3>Uzzwal Maharjan</h3>
            <p>React / TypeScript & Web-GIS Specialist</p>
          </div>

          <div className='cv-highlights-list'>
            <div className='cv-highlight'>
              <Globe2 size={16} className='icon-green' />
              <div>
                <strong>Web-GIS & Data Visualization</strong>
                <p>MapLibre GL, Mapbox, Turf, OpenLayers & Recharts</p>
              </div>
            </div>
            <div className='cv-highlight'>
              <Layers size={16} className='icon-green' />
              <div>
                <strong>Architecture & State</strong>
                <p>Turborepo monorepos, Redux Toolkit, Zustand, React Query</p>
              </div>
            </div>
            <div className='cv-highlight'>
              <Briefcase size={16} className='icon-green' />
              <div>
                <strong>Key Client Platforms Shipped</strong>
                <p>Zite (Field Data), DVS (British Embassy), SJP & DFIMS</p>
              </div>
            </div>
          </div>

          <div className='cv-tech-pills'>
            <span>React 19</span>
            <span>TypeScript</span>
            <span>MapLibre GL</span>
            <span>Turborepo</span>
            <span>Redux</span>
            <span>Tailwind</span>
          </div>
        </div>

        <div className='cv-card-footer'>
          <GraduationCap size={15} /> Academia International College · B.Sc.
          CSIT
        </div>
      </div>

      <div className='scroll-cue'>
        <span>Scroll to discover</span>
        <div />
      </div>
    </section>
  )
}
