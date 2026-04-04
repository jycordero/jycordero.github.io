import { profile } from '../data/profile'

export default function About() {
  const { headline, about, skills } = profile

  return (
    <div className="px-5 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10">

      {/* Section label */}
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0A3055] mb-4">
        About Me
      </p>

      {/* Display headline — serif for elegance */}
      <h2 className="font-serif font-light text-[#1C1C1C] leading-tight mb-8"
          style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.4rem)' }}>
        {headline.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h2>

      {/* About paragraph */}
      <p className="text-[15px] text-[#444] leading-relaxed max-w-prose mb-8">
        {about}
      </p>

      {/* Skills — inline tag groups */}
      <div className="space-y-2">
        {skills.map(({ label, items }) => (
          <div key={label} className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#0A3055] mr-1">
              {label}
            </span>
            {items.map((item, i) => (
              <span key={item} className="text-[14px] text-[#333]">
                {item}{i < items.length - 1 && <span className="text-[#aaa] ml-1.5">·</span>}
              </span>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}
