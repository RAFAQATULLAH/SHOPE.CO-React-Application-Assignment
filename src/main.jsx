import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Anouncementbar from './Components/anouncementbar/announcmentbar'
import Nav from './Components/Nav/Nav'



createRoot(document.getElementById('root')).render(
  <>
  <Anouncementbar/>
  <Nav/>
  </>
)
