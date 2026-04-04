import SectionTitle from './shared/SectionTitle'
import LeftCard from './shared/LeftCard'
import { experience } from '../data/experience'

export default function Experience() {
  if (!experience.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Experience</SectionTitle>
      {experience.map((item, i) => (
        <LeftCard key={i} {...item} />
      ))}
    </section>
  )
}
