import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/App'
import { ListaProductos } from './components/ListaProductos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
