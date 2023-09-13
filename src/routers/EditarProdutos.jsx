import { useNavigate, useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

const {id} = useParams();




  //
document.title = "editar produtos " + id;


const navigate =useNavigate

 const ProdutoRetornadoDofiltro =ListaProdutos.filter(produto => produto.id == id[0]);



 const [produto, setProduto] = useState({
id:ProdutoRetornadoDofiltro.id,
nome: ProdutoRetornadoDofiltro.nome,
desc: ProdutoRetornadoDofiltro.desc,
preco:ProdutoRetornadoDofiltro.preco
});




const handChange = (evento)=>{
  const{name,value} = evento.target;
  
  setProduto({...produto,[name]:value})
}

const handSubmit = (evento) =>{
  evento.preventDefaul();

  let indice;

  ListaProdutos.forEach((item,index)=>{
    if(item.id == id)
    indice = index;
  });
  ListaProdutos.splice(indice,1,produto);
  navigate("./Produtos.jsx")
}


    return (
      <div>
          <h1>EditarProdutos</h1>
          <p>objeto selecionado : {ProdutoRetornadoDofiltro[0].nome}</p>
          <p>valor do produto = {produto}</p>
          <button onClick={()=>setProduto("sla")}>mudar state</button>
          <div>
            <form onSubmit={handSubmit}>
              <fieldset>
                <legend>produto selecionado</legend>
                <input type="hidden" name="id" onChange={handChange} value={produto.id} />
                <div>
                  <label htmlFor="">nome do produto</label>
                  <input type="text" name="nome" id="idprod"  onChange={handChange} Value={produto.nome}/>
                  </div>
                  <div>
                  <label htmlFor="">descriçao</label>
                  <input type="text" name="desc" id="iddesc"  onChange={handChange} Value={produto.desc}/>
                  </div>
                  <div>
                  <label htmlFor="">preco</label>
                  <input type="text" name="preco" id="idpreco"  onChange={handChange} Value={produto.preco}/>
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
  