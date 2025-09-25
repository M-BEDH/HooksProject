import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// import App from './AppOld.jsx'

// import App from './AppOld1.jsx'

// import App from './AppOld2.jsx'

// import App from './AppOld3.jsx'

// import App from './AppOld4.jsx'

// import App from './AppOld5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
