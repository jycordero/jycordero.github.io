import SectionTitle from './shared/SectionTitle'
import LeftCard from './shared/LeftCard'
import { jobs } from '../data/jobs'

export default function Jobs() {
  if (!jobs.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Other Work Experience</SectionTitle>
      {jobs.map((item, i) => (
        <LeftCard key={i} {...item} />
      ))}
    </section>
  )
}
