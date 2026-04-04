import SectionTitle from './shared/SectionTitle'
import LeftCard from './shared/LeftCard'
import { projects } from '../data/projects'

export default function Projects() {
  if (!projects.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>Projects</SectionTitle>
      {projects.map((item, i) => (
        <LeftCard key={i} {...item} />
      ))}
    </section>
  )
}
