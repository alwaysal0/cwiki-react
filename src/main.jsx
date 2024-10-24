import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n.js'
import MainBox from './MainBox.jsx'
import Header from './Header.jsx'
import Minibox from './minibox.jsx'
import InformationAboutC from './informationAboutC.jsx'
import FirstProgram from './FirstProgram.jsx'
import Footer from './Footer.jsx'
import './css/index.css'
import './observer.js'

createRoot(document.querySelector("header")).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
createRoot(document.querySelector("#main-box")).render(
  <StrictMode>
    <MainBox />
  </StrictMode>,
)
createRoot(document.querySelector("#information-about-C")).render(
  <StrictMode>
    <InformationAboutC />
  </StrictMode>,
)
createRoot(document.querySelector("#uWillNeed")).render(
  <StrictMode>
    <Minibox />
  </StrictMode>,
)
createRoot(document.querySelector("#firstProgram")).render(
  <StrictMode>
    <FirstProgram />
  </StrictMode>,
)
createRoot(document.querySelector("footer")).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)