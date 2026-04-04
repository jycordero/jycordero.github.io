import SectionTitle from './shared/SectionTitle'
import TopCard from './shared/TopCard'
import { education } from '../data/education'

export default function Education() {
  if (!education.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Education</SectionTitle>
      {education.map((item, i) => (
        <TopCard key={i} {...item} />
      ))}
    </section>
  )
}
