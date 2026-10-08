import { MapPin } from 'lucide-react'
import { profile } from '@/lib/profile'

export function CardHeader() {
  return (
    <header className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.availability}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden="true" />
          {profile.location}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>
        <p className="font-mono text-sm text-primary sm:text-base">{profile.role}</p>
      </div>
    </header>
  )
}
