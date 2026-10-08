import { CardHeader } from '@/components/card-header'
import { ContactLinks } from '@/components/contact-links'
import { SkillsRow } from '@/components/skills-row'
import { profile } from '@/lib/profile'

export default function Page() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 right-0 size-[34rem] translate-x-1/4 rounded-full bg-[var(--neon-blue)]/10 blur-3xl"
      />

      <article className="relative flex w-full max-w-3xl flex-col gap-12">
        <CardHeader />

        <div className="flex flex-col gap-6">
          <p className="text-pretty text-lg leading-relaxed text-foreground/95 sm:text-xl">{profile.bio}</p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {'Working with '}
            <span className="text-foreground">{profile.collaborators.join(' · ')}</span>
          </p>
        </div>

        <SkillsRow />
        <ContactLinks />

        <footer className="flex items-center justify-between border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <span>{'© '}{new Date().getFullYear()} {profile.name}</span>
          <span>Human judgment, machine scale.</span>
        </footer>
      </article>
    </main>
  )
}
