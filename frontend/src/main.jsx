import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// // import template css (global)
// import './assets/css/style.css';        
// import './assets/css/responsive.css';

// import './assets/scss/main.scss';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
