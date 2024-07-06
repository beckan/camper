import { useEffect, useState } from 'react'
import './clock.component.css'

export function Clock(): JSX.Element {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="c-clock">
      {value.getHours() < 10 ? `0${value.getHours()}` : value.getHours()}:
      {value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes()}
    </div>
  )
}
