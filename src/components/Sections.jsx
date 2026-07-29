import {
  ArrowDownRight,
  ArrowUpRight,
  Bike,
  BookOpen,
  CircleDotDashed,
  Code2,
  FlagTriangleRight,
  Github,
  Goal,
  Linkedin,
  Mail,
  Phone,
  Plane,
  Sparkles,
  Trophy,
  Twitter,
  Waves,
} from 'lucide-react'
import fashionistaPreview from '../assets/fashionista.jpeg'
import dodoPreview from '../assets/dodo.jpeg'
import hamrofoodPreview from '../assets/hamrofood.jpeg'

function SectionLabel({ children, index }) {
  return (
    <div className='section-label'>
      <span>{index}</span>
      <span>{children}</span>
      <i />
    </div>
  )
}

const experience = [
  {
    title: 'Frontend Developer',
    period: '2023 — Present',
    company: 'Naxa Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    summary:
      'Promoted from intern to mid-level developer, now shaping frontend architecture across several production platforms.',
    points: [
      'Map-based dashboards and geospatial visualisations with MapLibre and Mapbox.',
      'Reusable React component systems and predictable application state.',
      'Decision-ready charts and reporting views for complex programme data.',
    ],
  },
  {
    title: 'WordPress Intern → Web Designer',
    period: '2019 — 2020',
    company: 'Himalayan Technies',
    location: 'Kathmandu, Nepal',
    summary:
      'Started my web journey building responsive WordPress experiences, themes, and polished interfaces.',
    points: [
      'Customised WordPress themes and page experiences.',
      'Focused on responsive UI with semantic HTML and modern CSS.',
    ],
  },
]

const projects = [
  {
    name: 'Zite',
    type: 'Case management',
    number: '01',
    description:
      'A flexible field-data collection and case-management platform for development, humanitarian, and research teams.',
    stack: ['React', 'Redux-Saga', 'MapLibre', 'Turborepo'],
  },
  {
    name: 'DVS',
    type: 'Data visualisation',
    number: '02',
    description:
      'A clear, insight-led dashboard for tracking development programmes and projects at the British Embassy Nepal.',
    stack: ['TypeScript', 'Recharts', 'MapLibre', 'Vite'],
  },
  {
    name: 'SJP Web-GIS',
    type: 'Participatory mapping',
    number: '03',
    description:
      'A GIS platform helping local governments plan and respond to Gender-Based Violence using evidence from the ground.',
    stack: ['React', 'Zustand', 'Turf', 'Mapbox'],
  },
  {
    name: 'DFIMS',
    type: 'National finance platform',
    number: '04',
    description:
      'Dashboards, maps, profiles, and custom reports for managing and monitoring development finance in Nepal.',
    stack: ['TypeScript', 'Redux Toolkit', 'Recharts', 'MapLibre GL'],
  },
  {
    name: 'Fashionista',
    type: 'E-commerce',
    number: '01',
    personal: true,
    image: fashionistaPreview,
    description:
      'A React T-shirt e-commerce website with Firebase-powered authentication and database services, Redux Toolkit state management, and React Hook Form validation.',
    stack: ['React', 'Firebase', 'Redux Toolkit', 'React Hook Form'],
    url: 'https://fashion-6cff0.web.app/',
  },
  {
    name: 'The Dodo',
    type: 'Project management',
    number: '02',
    personal: true,
    image: dodoPreview,
    description:
      'A project-management system built around React Hooks, including custom hooks, with Firebase handling authentication and file storage.',
    stack: ['React', 'Custom Hooks', 'Firebase Auth', 'Firebase Storage'],
    url: 'https://dodobyujol.netlify.app/',
  },
  {
    name: 'Hamro Food',
    type: 'Food delivery',
    number: '03',
    personal: true,
    image: hamrofoodPreview,
    description:
      'A responsive food-subscription landing experience focused on making healthy meal discovery feel simple and inviting.',
    stack: ['React', 'Responsive UI', 'CSS'],
    url: 'https://hamrofood.netlify.app/',
  },
]

const skillGroups = [
  ['Frontend', ['React', 'TypeScript', 'JavaScript', 'HTML / CSS']],
  ['Data & Maps', ['MapLibre GL', 'OpenLayers', 'Recharts', 'Turf']],
  ['Workflow', ['Vite', 'Turborepo', 'Git', 'Storybook']],
  ['State', ['Redux Toolkit', 'Zustand', 'React Query', 'React Hook Form']],
]

const hobbies = [
  [
    'Football',
    Goal,
    'For the team spirit',
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Cricket',
    CircleDotDashed,
    'For a good weekend match',
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Basketball',
    CircleDotDashed,
    'For the fast pace',
    'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Tennis',
    Trophy,
    'For the rally',
    'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Swimming',
    Waves,
    'For a clear mind',
    'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Novels',
    BookOpen,
    'For a new perspective',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Traveling',
    Plane,
    'For the next horizon',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Cycling',
    Bike,
    'For the open road',
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Formula 1',
    FlagTriangleRight,
    'For race-day energy',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  ],
]

const professionalProjects = projects.filter(project => !project.personal)
const personalProjects = projects.filter(project => project.personal)

export function HeroSection({ goTo }) {
  return (
    <section id='home' className='hero'>
      <div className='hero-copy reveal'>
        <p className='eyebrow'>
          <Sparkles size={14} /> Frontend developer · Kathmandu, Nepal
        </p>
        <h1>
          Making complex
          <br />
          <em>feel effortless.</em>
        </h1>
        <p className='hero-intro'>
          I’m Uzzwal, a frontend developer creating clear, human-friendly
          digital products for organisations doing meaningful work.
        </p>
        <div className='hero-actions'>
          <button className='button button-dark' onClick={() => goTo('work')}>
            Explore my work <ArrowDownRight size={18} />
          </button>
          <a className='text-link' href='mailto:ujolmaharjan94@gmail.com'>
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className='hero-art' aria-hidden='true'>
        <div className='orbit orbit-one' />
        <div className='orbit orbit-two' />
        <div className='map-card'>
          <div className='map-grid' />
          <div className='map-path' />
          <span className='map-pin pin-one' />
          <span className='map-pin pin-two' />
          <span className='map-pin pin-three' />
          <div className='map-card-label'>
            Spatial thinking
            <br />
            <b>meets digital craft</b>
          </div>
        </div>
        <div className='floating-chip chip-one'>
          React <Code2 size={15} />
        </div>
        <div className='floating-chip chip-two'>3+ years building</div>
      </div>
      <div className='scroll-cue'>
        <span>Scroll to discover</span>
        <div />
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id='about' className='section about-section'>
      <SectionLabel index='01'>A little about me</SectionLabel>
      <div className='about-grid'>
        <h2>
          I turn ambitious ideas into <em>useful interfaces.</em>
        </h2>
        <div>
          <p>
            I build scalable React and TypeScript applications for government
            and international-development teams. My sweet spot is where dense
            information, spatial data, and real people meet.
          </p>
          <p>
            I care about thoughtful systems, component reusability, and making
            the hard stuff feel straightforward.
          </p>
          <div className='stats'>
            <div>
              <strong>
                3<span>+</span>
              </strong>
              <small>years of craft</small>
            </div>
            <div>
              <strong>4</strong>
              <small>production platforms</small>
            </div>
            <div>
              <strong>∞</strong>
              <small>curiosity</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WorkSection({ expanded, setExpanded }) {
  return (
    <section id='work' className='section work-section'>
      <SectionLabel index='02'>Selected work</SectionLabel>
      <div className='work-heading'>
        <h2>
          Built for impact.
          <br />
          <em>Designed for people.</em>
        </h2>
        <p>
          A selection of platforms where data is transformed into clarity and
          action.
        </p>
      </div>
      <p className='project-category'>Professional projects</p>
      <div className='professional-project-grid'>
        {professionalProjects.map(project => (
          <article
            className={`professional-project-card ${expanded === project.name ? 'expanded' : ''}`}
            key={project.name}
            onClick={() =>
              setExpanded(expanded === project.name ? null : project.name)
            }
          >
            <div className='professional-preview'>
              <span>
                Project visual
                <br />
                coming soon
              </span>
              <b>{project.number}</b>
            </div>
            <div className='professional-project-copy'>
              <span className='project-type'>{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className='project-stack'>
                {project.stack.map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <button
                aria-label={`Read more about ${project.name}`}
                className='project-detail'
              >
                Project details <ArrowDownRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <p className='project-note'>
        Professional project visuals will appear here as you add them.
      </p>
      <div className='personal-work-heading'>
        <p className='project-category'>Personal projects</p>
        <p>
          Designed, built, and shipped independently—each one was a chance to
          explore a different kind of product experience.
        </p>
      </div>
      <div className='personal-project-grid'>
        {personalProjects.map(project => (
          <article className='personal-project-card' key={project.name}>
            <a
              className='project-preview'
              href={project.url}
              target='_blank'
              rel='noreferrer'
              aria-label={`Open ${project.name}`}
            >
              <img
                src={project.image}
                alt={`${project.name} website interface`}
              />
              <span>
                View live project <ArrowUpRight size={14} />
              </span>
            </a>
            <div className='personal-project-copy'>
              <div>
                <span className='project-number'>{project.number}</span>
                <span className='project-type'>{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className='project-stack'>
                {project.stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                className='project-visit always-visible'
                href={project.url}
                target='_blank'
                rel='noreferrer'
              >
                Visit live project <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id='experience' className='section experience-section'>
      <SectionLabel index='03'>The journey</SectionLabel>
      <div className='experience-layout'>
        <h2>
          Growing with every
          <br />
          <em>good challenge.</em>
        </h2>
        <div className='timeline'>
          {experience.map(item => (
            <article className='timeline-item' key={item.title}>
              <div className='timeline-dot' />
              <p className='period'>{item.period}</p>
              <h3>{item.title}</h3>
              <p className='company'>
                {item.company} <span>· {item.location}</span>
              </p>
              <p className='summary'>{item.summary}</p>
              <ul>
                {item.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section className='section skills-section'>
      <SectionLabel index='04'>My toolkit</SectionLabel>
      <div className='skills-heading'>
        <h2>
          Tools that help me
          <br />
          <em>make things happen.</em>
        </h2>
        <span className='rotating-star'>✳</span>
      </div>
      <div className='skill-grid'>
        {skillGroups.map(([group, skills]) => (
          <div className='skill-group' key={group}>
            <h3>{group}</h3>
            <div>
              {skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function HobbiesSection() {
  return (
    <section id='hobbies' className='section hobbies-section'>
      <SectionLabel index='05'>Beyond the screen</SectionLabel>
      <div className='hobbies-heading'>
        <h2>
          Always up for a<br />
          <em>good game or story.</em>
        </h2>
        <p>
          When I’m away from the keyboard, you’ll usually find me moving,
          competing, or getting lost in a great novel.
        </p>
      </div>
      <div className='hobby-grid'>
        {hobbies.map(([name, Icon, note, image], index) => (
          <article
            className='hobby-card'
            key={name}
            style={{ '--hobby-index': index }}
          >
            <img
              className='hobby-card-image'
              src={image}
              alt=''
              loading='lazy'
            />
            <div className='hobby-card-overlay' />
            <div className='hobby-icon'>
              <Icon size={30} strokeWidth={1.45} />
            </div>
            <div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <p>{note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

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
        ujolmaharjan94@gmail.com <ArrowUpRight size={27} />
      </a>
      <div className='contact-footer'>
        <span>Bholdhoka, Lalitpur · Nepal</span>
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
