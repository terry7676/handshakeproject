import { profile } from '@/lib/profile'

export function SkillsRow() {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-4">
      <h2 id="skills-heading" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Specialties
      </h2>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="text-base font-medium after:ml-4 after:text-muted-foreground after:content-['/'] last:after:content-none"
          >
            <span className="neon-text">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
