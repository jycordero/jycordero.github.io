export default function LeftCard({ name, company, jobTitle, qualification, dates, link, github, bullets = [] }) {
  const primaryTitle = jobTitle || qualification
  const secondaryTitle = company || name

  return (
    <div className="mb-7 last:mb-0">

      {/* Mobile: stacked. Desktop: date column + content column */}
      <div className="flex flex-col md:grid md:grid-cols-[7.5rem_1fr] gap-x-5">

        {/* Date */}
        <div className="mb-1 md:mb-0 md:pt-0.5">
          <span className="text-[12px] text-[#667] leading-snug font-medium">{dates}</span>
        </div>

        {/* Content */}
        <div>
          <p className="text-[15px] font-semibold text-[#1C1C1C] leading-snug">{primaryTitle}</p>

          <p className="text-[14px] text-[#555] mt-0.5">
            {link
              ? <a href={link} target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#1C1C1C] transition-colors underline-offset-2 hover:underline">
                  {secondaryTitle}
                </a>
              : secondaryTitle
            }
          </p>

          {github && (
            <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer"
              className="text-[13px] text-[#668] hover:text-[#1C1C1C] transition-colors mt-0.5 block">
              github.com/{github}
            </a>
          )}

          {bullets.length > 0 && (
            <div className="mt-2 space-y-1.5">
              {bullets.map((b, i) => (
                <p key={i} className="text-[13px] text-[#555] leading-relaxed">{b}</p>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
