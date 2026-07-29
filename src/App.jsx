import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { HobbiesSection } from './components/HobbiesSection'
import { SkillsSection } from './components/SkillsSection'
import { WorkSection } from './components/WorkSection'

const navItems = ['about', 'work', 'experience', 'hobbies', 'contact']

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    navItems.forEach(
      id =>
        document.getElementById(id) &&
        observer.observe(document.getElementById(id)),
    )
    return () => observer.disconnect()
  }, [])

  const goTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className='site-shell'>
      <div className='grain' />
      <header className='topbar'>
        <a
          className='monogram'
          href='#home'
          onClick={e => {
            e.preventDefault()
            goTo('home')
          }}
        >
          UM<span>.</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(item => (
            <button
              className={active === item ? 'active' : ''}
              key={item}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <a className='top-contact' href='mailto:ujolmaharjan94@gmail.com'>
          Let's talk <ArrowUpRight size={15} />
        </a>
        <button
          className='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle navigation'
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <HeroSection goTo={goTo} />
        <AboutSection />
        <WorkSection expanded={expanded} setExpanded={setExpanded} />
        <ExperienceSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </div>
  )
}
