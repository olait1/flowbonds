import React from 'react'
import ReactDOM from 'react-dom/client'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"


import { RouterProvider } from 'react-router-dom'
import router from './router'
import { UserProvider } from './contextProvider/userContext.jsx'
import { TogglerProvider } from './contextProvider/toggler.jsx'
import { Provider } from 'react-redux'
import store from './redux/toggler.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      
        <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  
    </UserProvider>
  </React.StrictMode>,
)
