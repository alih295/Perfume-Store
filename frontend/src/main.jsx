import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contaxt from '../src/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contaxt>
    <App/>
    </Contaxt>
  </StrictMode>,
)
