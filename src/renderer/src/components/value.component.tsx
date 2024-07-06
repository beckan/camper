import './value.component.css'

interface ValueProps {
  value: string
  meta: string
}

export function Value({ value, meta }: ValueProps): JSX.Element {
  return (
    <div className="c-value">
      <div className="c-value-data">{value}</div>
      <div className="c-value-meta">{meta}</div>
    </div>
  )
}
