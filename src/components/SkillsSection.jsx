import { SectionLabel } from './SectionLabel'

const skillGroups = [
  ['Frontend', ['React', 'TypeScript', 'JavaScript', 'HTML / CSS']],
  ['Data & Maps', ['MapLibre GL', 'OpenLayers', 'Recharts', 'Turf']],
  ['Workflow', ['Vite', 'Turborepo', 'Git', 'Storybook']],
  ['State', ['Redux Toolkit', 'Zustand', 'React Query', 'React Hook Form']],
]

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
