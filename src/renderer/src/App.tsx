import { Theme, ThemeProps } from '@radix-ui/themes'
import { ViewHome } from './views/home.component'
import { Shell } from './components/shell.component'
import './base.css'
import { useState } from 'react'

function App(): JSX.Element {
  const [appearance, setAppearance] = useState<ThemeProps['appearance']>('light')

  function handleToggleAppearance() {
    setAppearance(appearance === 'light' ? 'dark' : 'light')
  }

  return (
    <Theme appearance={appearance} accentColor="gold">
      <button onClick={handleToggleAppearance} className="appearance-toggle-button">
        {appearance === 'light' ? '🌞' : '🌙'}
      </button>
      <Shell>
        <ViewHome />
      </Shell>
    </Theme>
  )
}

export default App
