import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routers/Home.jsx';
import Produtos from './routers/Produtos.jsx';
import EditarProdutos from './routers/EditarProdutos.jsx';
import Error from './routers/Error.jsx';
import ExcluirProdutos from './routers/ExcluirProdutos.jsx';
import CriarProduto from './routers/CriarProduto.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produtos" , element: <Produtos/>},
      {path: "/editar/produtos/:id" , element: <EditarProdutos/>},
      {path: "/excluir/produtos/:id" , element: <ExcluirProdutos/>},
      {path: "/criar/produto",element:<CriarProduto />}
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)