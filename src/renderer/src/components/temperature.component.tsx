import './temperature.component.css'

interface TemperatureProps {
  value: number
}

export function Temperature({ value }: TemperatureProps): JSX.Element {
  return (
    <div className="c-temperature">
      <div>Bla bla</div>
      {value}°C
    </div>
  )
}
