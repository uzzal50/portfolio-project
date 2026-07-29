import { SectionLabel } from './SectionLabel'

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
