import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./routers/Home.jsx"
import Produtos from "./routers/Produtos.jsx"
import AdicionarProduto from './routers/AdicionarProduto.jsx'
import EditarProduto from './routers/EditarProdutos.jsx'
import ExcluirProduto from "./routers/ExcluirProdutos.jsx"
import Error from "./routers/Error.jsx"


const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/produtos/adicionar", element: <AdicionarProduto />},
      { path: "/produtos/editar/:id", element: <EditarProduto /> },
      { path: "/produtos/excluir/:id", element: <ExcluirProduto /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)