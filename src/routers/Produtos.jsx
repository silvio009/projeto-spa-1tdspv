import { ListaProdutos } from "../components/ListaProdutos";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";

export default function Produtos() {

    document.title = "Lista de Produtos";

    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>

        <div>
          <table className= {classes.tableStyle}>
            <thead>
              <tr className={classes.tableHeaderStyles}>
                <th className={classes.tableHeaderStyles}>ID </th>
                <th className={classes.tableHeaderStyles}>Nome </th>
                <th className={classes.tableHeaderStyles}>Descrição</th>
                <th className={classes.tableHeaderStyles}>Preço</th>
                <th className={classes.tableHeaderStyles}>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((produto, index) => (
                <tr key={index} className ={classes.tableLineStyles}>
                  <td className={classes.tableDataStyles}>{produto.id}</td>
                  <td className={classes.tableDataStyles}>{produto.nome}</td>
                  <td className={classes.tableDataStyles}>{produto.desc}</td>
                  <td className={classes.tableDataStyles}>{produto.preco}</td>
                  <td className={classes.tableDataStyles}><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className={classes.tableLineStyles}>Total de Produtos: {ListaProdutos.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }