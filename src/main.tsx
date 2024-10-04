import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TodoApp } from './components/TodoApp'
import { ListaProductos } from './components/ListaProductos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp></TodoApp>
    <ListaProductos></ListaProductos>
  </StrictMode>,
)
