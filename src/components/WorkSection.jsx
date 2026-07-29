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
    type: 'data collection and task management',
    number: '01',
    image: zitePreview,
    description:
      'Zite is a field data collection and management platform built for organizations working in development, humanitarian, and research sectors. It enables teams to design forms, collect data in the field, manage cases through configurable workflows, and generate reports — all from a single platform.',
    stack: ['React', 'Redux-Saga', 'MapLibre', 'Turborepo'],
  },
  {
    name: 'DVS',
    type: 'Data visualisation',
    number: '02',
    image: dvsPreview,
    description:
      'The Data Visualisation System (DVS) is British Embassy Kathmandu BEK’s repository of data on the implementation of programmes and their components in Nepal. It provides decision-ready charts and reporting views for complex programme data.',
    stack: ['TypeScript', 'Recharts', 'MapLibre', 'Vite'],
  },
  {
    name: 'SJP Web-GIS',
    type: 'Participatory mapping',
    number: '03',
    image: sjpPreview,
    description:
      'The SJP Web-GIS Dashboard Platform is an interactive Web-GIS that supports evidence-based planning for Gender-Based Violence (GBV) prevention and response by visualising hotspots, services, and key insights through interactive maps and dashboards',
    stack: ['React', 'Zustand', 'Turf', 'Mapbox'],
  },
  {
    name: 'DFIMS',
    type: 'National finance platform',
    number: '04',
    image: dfimsPreview,
    description:
      "Nepal's DFIMS is an online system that supports the tracking and recording of development activities, results across various flows, and associated financial information",
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
                className='project-detail hover:text-primary'
              >
                Project details <ArrowDownRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

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
