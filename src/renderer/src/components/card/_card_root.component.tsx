import { ReactNode } from 'react'
import './_card_root.component.css'

interface _CardRootProps {
  children: ReactNode
}

export function _CardRoot({ children }: _CardRootProps): JSX.Element {
  return <div className="c-card-root">{children}</div>
}
