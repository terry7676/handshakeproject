import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/profile'

export function ContactLinks() {
  return (
    <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
      <h2 id="contact-heading" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Get in touch
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {profile.contacts.map((contact) => {
          const isExternal = contact.href.startsWith('http')
          return (
            <li key={contact.label}>
              <a
                href={contact.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="neon-card group flex items-center justify-between gap-4 rounded-xl px-5 py-4 hover:-translate-y-1 hover:scale-[1.02] focus-visible:-translate-y-1 focus-visible:outline-none motion-reduce:transform-none"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{contact.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{contact.value}</span>
                </span>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--neon-blue)]"
                  aria-hidden="true"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
