import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { FiltersProvider } from './context/filters'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
