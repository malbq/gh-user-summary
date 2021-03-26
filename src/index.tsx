import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import { FoundUserProvider } from './contexts/FoundUserContext'

ReactDOM.render(
  <React.StrictMode>
    <FoundUserProvider>
      <App />
    </FoundUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
