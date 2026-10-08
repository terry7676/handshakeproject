import { profile } from '@/lib/profile'

export function SkillsRow() {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-4">
      <h2 id="skills-heading" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Specialties
      </h2>
      <ul className="flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-secondary-foreground shadow-[0_1px_0_0_oklch(1_0_0/8%)_inset,0_4px_12px_-2px_oklch(0_0_0/60%)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary motion-reduce:transform-none"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
