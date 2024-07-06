import { ReactNode } from 'react'
import './surface.component.css'

interface SurfaceProps {
  children: ReactNode
}

export function Surface({ children }: SurfaceProps): JSX.Element {
  return <div className="c-surface">{children}</div>
}
