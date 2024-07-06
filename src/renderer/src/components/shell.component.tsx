import { ReactNode } from 'react'
import './shell.component.css'

interface ShellProps {
  children: ReactNode
}

export function Shell({ children }: ShellProps): JSX.Element {
  return (
    <div className="c-shell">
      <div className="c-shell-inner">{children}</div>
    </div>
  )
}
