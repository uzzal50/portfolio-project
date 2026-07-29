import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import fashionistaPreview from '../assets/fashionista.jpeg'
import dodoPreview from '../assets/dodo.jpeg'
import hamrofoodPreview from '../assets/hamrofood.jpeg'
import dfimsPreview from '../assets/projects/dfims.jpeg'
import dvsPreview from '../assets/projects/dvs.jpeg'
import nsoPreview from '../assets/projects/nso.jpeg'
import sjpPreview from '../assets/projects/sjp.jpeg'
import zitePreview from '../assets/projects/zite.jpeg'
import { SectionLabel } from './SectionLabel'

const projects = [
  {
    name: 'Zite',
    type: 'Case management',
    number: '01',
    image: zitePreview,
    description:
      'A flexible field-data collection and case-management platform for development, humanitarian, and research teams.',
    stack: ['React', 'Redux-Saga', 'MapLibre', 'Turborepo'],
  },
  {
    name: 'DVS',
    type: 'Data visualisation',
    number: '02',
    image: dvsPreview,
    description:
      'A clear, insight-led dashboard for tracking development programmes and projects at the British Embassy Nepal.',
    stack: ['TypeScript', 'Recharts', 'MapLibre', 'Vite'],
  },
  {
    name: 'SJP Web-GIS',
    type: 'Participatory mapping',
    number: '03',
    image: sjpPreview,
    description:
      'A GIS platform helping local governments plan and respond to Gender-Based Violence using evidence from the ground.',
    stack: ['React', 'Zustand', 'Turf', 'Mapbox'],
  },
  {
    name: 'DFIMS',
    type: 'National finance platform',
    number: '04',
    image: dfimsPreview,
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

const professionalProjects = projects.filter(project => !project.personal)
const personalProjects = projects.filter(project => project.personal)

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
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className='professional-project-image'
                />
              ) : (
                <span>
                  Project visual
                  <br />
                  coming soon
                </span>
              )}
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
