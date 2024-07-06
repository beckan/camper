import { ReactNode } from 'react'
import './_card_title.component.css'

interface _CardTitleProps {
  children: ReactNode
  icon?: ReactNode
}

export function _CardTitle({ children, icon }: _CardTitleProps): JSX.Element {
  return (
    <div className="c-card-title">
      {children} {icon}
    </div>
  )
}
