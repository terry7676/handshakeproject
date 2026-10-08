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
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-[0_1px_0_0_oklch(1_0_0/8%)_inset,0_8px_24px_-6px_oklch(0_0_0/70%),0_2px_6px_oklch(0_0_0/50%)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary hover:shadow-[0_1px_0_0_oklch(1_0_0/10%)_inset,0_18px_40px_-8px_oklch(0_0_0/80%),0_0_0_1px_oklch(0.89_0.19_128/25%),0_8px_30px_-10px_oklch(0.89_0.19_128/35%)] focus-visible:-translate-y-1 focus-visible:border-primary focus-visible:outline-none motion-reduce:transform-none"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{contact.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{contact.value}</span>
                </span>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
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
