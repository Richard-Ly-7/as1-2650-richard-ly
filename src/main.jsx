import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <p>e16f30a (HEAD -&gt; main) Initial commit: set up Vite React app</p>
  </StrictMode>,
)
