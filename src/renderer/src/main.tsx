import '@radix-ui/themes/styles.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ladding, temperature, temperature2, temperature3 } from './data'

window.electron.ipcRenderer.on('updateTemperature', (_event, temp) => {
  temperature.value = temp.temp
  temperature2.value = temp.temp2
  temperature3.value = temp.temp3
})

window.electron.ipcRenderer.on('updateLaddning', (_event, data) => {
  ladding.value = data.ladding
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
