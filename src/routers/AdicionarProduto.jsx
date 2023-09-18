import{ListaProdutos} from "../components/ListaProdutos"
import { useNavigate } from "react-router-dom";

export default function AdicionarProduto(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nome, desc, preco, img } = e.target;
        
        if(!nome.value || !desc.value || !preco.value || !img.value){
            alert('Preencha todos os campos!');
            return;
        }

        const novoProduto = {
            id: ListaProdutos.length + 1,
            nome: nome.value,
            desc: desc.value,
            preco: preco.value,
            img: img ? img.value : "https://picsum.photos/100/100"
        }
        console.log(novoProduto);
        ListaProdutos.push(novoProduto);
        navigate('/produtos')
    }

    return(
        <main>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <fieldset >
                    <legend >Novo Produto</legend>
                    <div >
                        <label htmlFor="idNome">Nome:</label>
                        <input  type="text" name='nome' id='idNome' />
                    </div>
                    <div>
                        <label  htmlFor="idDesc">Descrição:</label>
                        <input  type="text" name='desc' id='idDesc' />
                    </div>
                    <div >
                        <label  htmlFor="idPreco">Preço:</label>
                        <input  type="number" min="0" name='preco' id='idPreco' />
                    </div>
                    <div >
                        <label htmlFor="idImg">Imagem:</label>
                        <input type="text" name='img' id='idImg' />
                    </div>
                    <button type="submit">Adicionar</button>
                </fieldset>
            </form>
        </main>
    )
}