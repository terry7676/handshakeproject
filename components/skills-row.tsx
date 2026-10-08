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
            className="neon-card rounded-full px-3.5 py-1.5 text-sm font-medium text-secondary-foreground hover:-translate-y-0.5 hover:text-foreground motion-reduce:transform-none"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
