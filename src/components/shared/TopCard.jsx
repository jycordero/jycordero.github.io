export default function TopCard({ name, qualification, dates, link, quote, bullets = [] }) {
  const primaryTitle = qualification || name
  const secondaryTitle = qualification ? name : null

  return (
    <div className="mb-7 last:mb-0">

      {/* Mobile: stacked. Desktop: date column + content column */}
      <div className="flex flex-col md:grid md:grid-cols-[7.5rem_1fr] gap-x-5">

        {/* Date */}
        <div className="mb-1 md:mb-0 md:pt-0.5">
          {dates && (
            <span className="text-[12px] text-[#667] leading-snug font-medium">{dates}</span>
          )}
        </div>

        {/* Content */}
        <div>
          <p className="text-[15px] font-semibold text-[#1C1C1C] leading-snug">
            {link
              ? <a href={link} target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#0A3055] transition-colors">
                  {primaryTitle}
                </a>
              : primaryTitle
            }
          </p>

          {secondaryTitle && (
            <p className="text-[14px] text-[#555] mt-0.5">{secondaryTitle}</p>
          )}

          {quote && (
            <p className="text-[13px] italic text-[#778] mt-1">{quote}</p>
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
