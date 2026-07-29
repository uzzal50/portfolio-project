import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Header({ active, goTo, menuOpen, setMenuOpen, navItems }) {
  return (
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
      <a
        className='top-contact hover:underline  hover:text-primary'
        href='mailto:ujolmaharjan94@gmail.com'
      >
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
  )
}
