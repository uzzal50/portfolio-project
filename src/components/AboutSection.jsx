import { SectionLabel } from './SectionLabel'

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
