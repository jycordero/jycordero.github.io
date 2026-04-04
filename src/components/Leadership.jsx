import SectionTitle from './shared/SectionTitle'
import TopCard from './shared/TopCard'
import { leadership } from '../data/leadership'

export default function Leadership() {
  if (!leadership.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Leadership</SectionTitle>
      {leadership.map((item, i) => (
        <TopCard key={i} {...item} />
      ))}
    </section>
  )
}
