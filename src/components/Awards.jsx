import SectionTitle from './shared/SectionTitle'
import TopCard from './shared/TopCard'
import { awards } from '../data/awards'

export default function Awards() {
  if (!awards.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Certifications</SectionTitle>
      {awards.map((item, i) => (
        <TopCard key={i} {...item} />
      ))}
    </section>
  )
}
