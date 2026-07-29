import {
  Bike,
  BookOpen,
  CircleDotDashed,
  FlagTriangleRight,
  Goal,
  Plane,
  Trophy,
  Waves,
} from 'lucide-react'
import cricketImage from '../assets/hobbies/cricket.jpeg'
import cyclingImage from '../assets/hobbies/cycling.jpeg'
import f1Image from '../assets/hobbies/f1.jpg'
import futsolImage from '../assets/hobbies/futsol.jpeg'
import novelImage from '../assets/hobbies/novel.jpeg'
import travelImage from '../assets/hobbies/travel.jpeg'
import { SectionLabel } from './SectionLabel'

const hobbies = [
  ['Football', Goal, 'For the team spirit', futsolImage],
  ['Cricket', CircleDotDashed, 'For a good weekend match', cricketImage],
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
  ['Novels', BookOpen, 'For a new perspective', novelImage],
  // ['Traveling', Plane, 'For the next horizon', travelImage],
  // ['Cycling', Bike, 'For the open road', cyclingImage],
  // ['Formula 1', FlagTriangleRight, 'For race-day energy', f1Image],
]

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
            className={`hobby-card ${index % 2 === 1 ? 'hobby-card--accent' : ''}`}
            key={name}
            style={{ '--hobby-index': index }}
          >
            <div className='hobby-card__media'>
              <img
                className='hobby-card-image'
                src={image}
                alt=''
                loading='lazy'
              />
              <div className='hobby-card-overlay' />
            </div>
            <div className='hobby-icon'>
              <Icon size={30} strokeWidth={1.45} />
            </div>
            <div className='hobby-card__content'>
              <span className='hobby-card__index'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{name}</h3>
              <p>{note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
