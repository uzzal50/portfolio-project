import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Twitter,
} from 'lucide-react'

export function ContactSection() {
  return (
    <section id='contact' className='contact-section'>
      <div className='contact-orb' />
      <p className='eyebrow'>
        <Sparkles size={14} /> Have a project in mind?
      </p>
      <h2>
        Let’s make something
        <br />
        <em>remarkable.</em>
      </h2>
      <a href='mailto:ujolmaharjan94@gmail.com' className='contact-email'>
        Let's Talk <ArrowUpRight size={27} />
      </a>
      <div className='contact-footer'>
        <span>Bholdhoka, Balkumari Lalitpur · Nepal</span>
        <div>
          <a
            href='https://www.linkedin.com/in/uzzwal-maharjan-26a806118/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin size={18} />
          </a>
          <a href='https://github.com/uzzal50' target='_blank' rel='noreferrer'>
            <Github size={18} />
          </a>
          <a
            href='https://x.com/uzzalmaharjan1'
            target='_blank'
            rel='noreferrer'
            aria-label='X / Twitter'
          >
            <Twitter size={18} />
          </a>
          <a href='tel:+9779813422903'>
            <Phone size={18} />
          </a>
          <a href='mailto:ujolmaharjan94@gmail.com'>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
