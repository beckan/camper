import { ReactNode } from 'react'
import './_card_content.component.css'

interface _CardContentProps {
  children: ReactNode
}

export function _CardContent({ children }: _CardContentProps): JSX.Element {
  return <div className="c-card-content">{children}</div>
}
