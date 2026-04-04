import { profile } from '../data/profile'

export default function Footer() {
  const { name, showReferences } = profile
  return (
    <div className="px-5 md:px-12 pt-6 pb-14 border-t border-[#A8C5E2]">
      <p className="text-[13px] text-[#0A3055]">
        {name}{showReferences && ' — References available on request'}
      </p>
    </div>
  )
}
