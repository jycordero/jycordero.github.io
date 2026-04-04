import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { profile } from '../data/profile'

const SOCIAL = [
  { key: 'email',    Icon: FaEnvelope, href: () => `mailto:${profile.email}`,          title: 'Email'    },
  { key: 'phone',    Icon: FaPhone,    href: () => `tel:${profile.phone}`,              title: 'Phone'    },
  { key: 'github',   Icon: FaGithub,   href: (u) => `https://github.com/${u}`,         title: 'GitHub'   },
  { key: 'linkedin', Icon: FaLinkedin, href: (u) => `https://linkedin.com/in/${u}`,    title: 'LinkedIn' },
]

export default function Header() {
  const { name, title, location, email, phone, resume, profileImage, social } = profile

  const [first, ...rest] = name.split(' ')
  const last = rest.join(' ')

  return (
    <div className="flex flex-col h-full">

      {/* Photo — fixed viewport height so it works on both desktop and mobile */}
      <div className="w-full overflow-hidden h-[52vh] flex-shrink-0">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1 px-6 md:px-10 pt-7 pb-8">

        <div>
          <h1 className="font-sans font-semibold text-[#1C1C1C] leading-none tracking-tight">
            <span className="block text-3xl md:text-5xl">{first}</span>
            <span className="block text-3xl md:text-5xl">{last}</span>
          </h1>
          <p className="mt-2 text-sm font-medium text-[#555] tracking-wide">{title}</p>
          {location && (
            <p className="mt-1 text-xs text-[#888] tracking-wide">{location}</p>
          )}
        </div>

        {/* Resume button */}
        {resume && (
          <a
            href={resume}
            download="Joseph_Cordero_Resume"
            className="mt-6 inline-block border border-[#0A3055] text-[#0A3055] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#0A3055] hover:text-white transition-colors duration-200 self-start"
          >
            Download Resume
          </a>
        )}

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-5">
          {SOCIAL.map(({ key, Icon, href, title: label }) => {
            const username = key === 'email' ? email : key === 'phone' ? phone : social[key]
            if (!username) return null
            return (
              <a
                key={key}
                href={href(username)}
                title={label}
                target={key !== 'email' && key !== 'phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-[#555] hover:text-[#0A3055] transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

      </div>
    </div>
  )
}
