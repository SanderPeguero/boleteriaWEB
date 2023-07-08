import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SideMenu from './SideMenu/SideMenu.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideMenu Child={App}/>
  </React.StrictMode>,
)
