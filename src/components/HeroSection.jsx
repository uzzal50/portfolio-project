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
          <Sparkles size={15} /> Frontend Developer
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

        <div className='hero-actions group'>
          <button
            className='button button-dark group-hover:underline'
            onClick={() => goTo('work')}
          >
            Explore my work <ArrowDownRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
