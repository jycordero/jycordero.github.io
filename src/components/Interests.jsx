import SectionTitle from './shared/SectionTitle'
import { interests } from '../data/interests'

export default function Interests() {
  if (!interests.length) return null
  return (
    <section className="px-5 md:px-12 py-8 border-t border-[#A8C5E2]">
      <SectionTitle>A Little More About Me</SectionTitle>
      <div className="space-y-4">
        {interests.map(({ category, items }) => (
          <div key={category} className="flex flex-col md:grid md:grid-cols-[7.5rem_1fr] gap-x-5">
            <div /> {/* empty date column for alignment */}
            <div>
              <p className="text-[15px] font-semibold text-[#1C1C1C]">{category}</p>
              {items.length > 0 && (
                <p className="text-[14px] text-[#555] mt-0.5 leading-relaxed">
                  {items.join(' · ')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
