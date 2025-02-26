import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Shop } from './App.jsx'
import { LoginPage } from './loginPage.jsx'
import { ProductList } from './ProductList.jsx'
import Axioshop18 from './meeting/project/path.jsx'
import Project from "./projek/praktek/path.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Project />
  </StrictMode>,
)
