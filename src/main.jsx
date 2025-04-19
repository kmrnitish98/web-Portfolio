import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './portfolio.css'

import Portfolio from './Portfolio.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>,
)
