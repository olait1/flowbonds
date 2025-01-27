import React from 'react'
import ReactDOM from 'react-dom/client'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"


import { RouterProvider } from 'react-router-dom'
import router from './router'
import { UserProvider } from './contextProvider/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
