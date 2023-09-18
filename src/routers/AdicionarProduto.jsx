import{ListaProdutos} from "../components/ListaProdutos"
import { useNavigate } from "react-router-dom";
import style from './AdionarProduto.module.css'

export default function AdicionarProduto(){
    const navigate = useNavigate();

    const AoAdicionar = (event) => {
        event.preventDefault();

        const { nome, desc, preco, img } = event.target;
        
      

        const novoProduto = {
            id: ListaProdutos.length + 1,
            nome: nome.value,
            desc: desc.value,
            preco: preco.value,
            img: img.value 
        }
        console.log(novoProduto);
        ListaProdutos.push(novoProduto);
        navigate('/produtos')
        alert("produto adicionando com sucesso!!!")
    }

   

    return(
        <main>
            <h1>Adicionar Produto</h1>
            <form className={style.AdionarProduto} onSubmit={AoAdicionar}>
                <fieldset className={style.form} >
                   
                    <div  >
                        <label  htmlFor="idNome" obrigatorio = {true}   >Nome:</label>
                        <input className={style.caixatexto} type="text" name='nome' id='idNome' placeholder="O nome do produto..."  required  />
                    </div>
                    <div>
                        <label  htmlFor="idDesc"  >Descrição:</label>
                        <input  className={style.caixatexto}  type="text" name='desc' id='idDesc' placeholder=" O descrição do produto..." required  />
                    </div>
                    <div >
                        <label  htmlFor="idPreco" >Preço:</label>
                        <input  className={style.caixatexto}  type="number" min="0" name='preco' id='idPreco' placeholder="O preço do produto..." required  />
                    </div>
                    <div >
                        <label htmlFor="idImg" >Imagem:</label>
                        <input   className={style.caixatexto} type="text" name='img' id='idImg'  placeholder="https://endereçodaimagem/" required pattern="https://.*" />
                    </div>
                    <button className={style.botao} type="submit">Adicionar</button>
                </fieldset>
            </form>
        </main>
    )
}