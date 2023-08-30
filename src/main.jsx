import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routers/Home.jsx'
import Produtos from './routers/Produtos.jsx'
import EditaProdutos from './routers/EditaProduto.jsx'
import Error from './routers/Error.jsx'

const router = createBrowserRouter([
  {path: "/" , element: <App/>,
   errorElement: <Error/>,
  children:[
    {path: "/" , element: <Home/>},
    {path: "/produtos" , element: <Produtos/>},
    {path: "/produtos/editar/:id" , element: <EditaProdutos/>},

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
