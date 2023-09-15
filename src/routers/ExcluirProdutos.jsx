import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import style from './ExcluirProduto.module.css';

export default function ExcluirProdutos() {
  document.title = "Excluir Produto";

  const { id } = useParams();
  const navigate = useNavigate();

  const produto = ListaProdutos.filter(
    (item) => item.id == id
  )[0];

  const handleDelete = () =>{

    let indice = ListaProdutos.findIndex(item=> item.id == produto.id);
    
    ListaProdutos.splice(indice,1);
    alert("Produto Excluido com sucesso !!")
    navigate("/produtos");
 }



  return (
   
    <>
    <div className={style.containerExcluir}>
    <h1>Excluir produtos </h1>

    <div>
        <section className={style.cardExcluir}>
          <h2>Produto selecionado para exclusão</h2>
          <h3 className={style.alertmsg}> voce tem certeza de que desaja excluir esse produto ? </h3>
          <figure>
            <img src={produto.img} alt={produto.desc} />
            <figcaption>
              {produto.nome} - R$ {produto.preco}
            </figcaption>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={()=>navigate("/Produtos")}>Cancelar</button>
          </figure>
        </section>
    </div>
     </div>
    </>
  )
}