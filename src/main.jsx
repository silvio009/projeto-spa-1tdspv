import React, { Children } from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'



import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routers/Home.jsx'
import Produtos from './routers/Produtos.jsx'
import EditaProduto from './routers/EditaProduto.jsx'
import Error from './routers/Error.jsx'

const router = createBrowserRouter([
  {path: "/", element:<App/>,
  path:"/", element:<Error/>,
  children:[
    {path:"/Home", element: <Home/>},
    {path:"/Produtos", element: <Produtos/>},
    {path:"/EditaProdutos", element:<EditaProduto/>},
  
  ]
}
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserProvide router ={router}/>
  </React.StrictMode>,
)
