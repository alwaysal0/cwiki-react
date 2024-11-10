import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n.js'
import Header from './general components/Header.jsx'
import Footer from './general components/Footer.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPages from './router.jsx'
import ScrollToTop from './general components/ScrollToTop.jsx'

createRoot(document.querySelector("#main-box")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RouterPages />
    </BrowserRouter>
  </StrictMode>,
)
createRoot(document.querySelector("footer")).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
