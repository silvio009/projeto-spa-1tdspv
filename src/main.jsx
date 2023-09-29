import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routers/Home.jsx'
import Produtos from './routers/Produtos.jsx'
import EditarProdutos from './routers/EditarProdutos.jsx'
import Error from './routers/Error.jsx'
import ExcluirProdutos from './routers/ExcluirProdutos.jsx'
import InserirProduto from './routers/InserirProduto.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produtos" , element: <Produtos/>},
      {path: "/editar/produtos/:id" , element: <EditarProdutos/>},
      {path: "/excluir/produtos/:id" , element: <ExcluirProdutos/>},
      {path: "/cadastrar/produto" , element: <InserirProduto/>},
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <RouterProvider router={router}/>
  ,
)