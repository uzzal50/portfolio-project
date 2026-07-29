import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Header } from './components/Header'
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
      <Header
        active={active}
        goTo={goTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
      />

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
