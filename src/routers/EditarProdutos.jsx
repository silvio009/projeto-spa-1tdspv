import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

const {id} = useParams();




  //
document.title = "editar produtos " + id;

 const ProdutoRetornadoDofiltro =ListaProdutos.filter(produto => produto.id == id);

 const [produto, setProduto] = useState("nome");

    return (
      <div>
          <h1>EditarProdutos</h1>
          <p>objeto selecionado : {ProdutoRetornadoDofiltro[0].nome}</p>
          <p>valor do produto = {produto}</p>
          <button onClick={()=>setProduto("sla")}>mudar state</button>
          <div>
            <form>
              <fieldset>
                <legend>produto selecionado</legend>
                <div>
                  <label htmlFor="">nome do produto</label>
                  <input type="text" name="nome" id="idprod" defaultValue={ProdutoRetornadoDofiltro[0].nome}/>
                  </div>
                  <div>
                  <label htmlFor="">descriçao</label>
                  <input type="text" name="desc" id="iddesc" defaultValue={ProdutoRetornadoDofiltro[0].desc}/>
                  </div>
                  <div>
                  <label htmlFor="">preco</label>
                  <input type="text" name="preco" id="idpreco" defaultValue={ProdutoRetornadoDofiltro[0].preco}/>
                  </div>
              <div>
                <button>editar</button>
              </div>

              </fieldset>
            </form>
          </div>
      </div>
    )
  }
  