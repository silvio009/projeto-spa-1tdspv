import { useParams, useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';


export default function EditarProduto() {
    const { id } = useParams()
    const navigate = useNavigate()

    const produtoSelecionado = ListaProdutos.filter(produto => produto.id == id)[0];

    const [produto, setProduto] = useState({
        id: produtoSelecionado.id,
        nome: produtoSelecionado.nome,
        desc: produtoSelecionado.desc,
        preco: produtoSelecionado.preco,
        img: produtoSelecionado.img
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let indice = 0;
        ListaProdutos.forEach((item, index) => {
            if (item.id == id) {
                indice = index;
            }
        })

        ListaProdutos.splice(indice, 1, produto);
        navigate('/produtos')
    }

    return (
        <main>
            <h1>EDITAR PRODUTO</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Produto Selecionado</legend>
                    <img src={produto.img} alt={produto.desc} />
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input
                            type="text"
                            name='nome'
                            id='idNome'
                            value={produto.nome}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <textarea
                            name='desc'
                            id='idDesc'
                            value={produto.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input
                            
                            type="number"
                            min="0"
                            name='preco'
                            id='idPreco'
                            value={produto.preco}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Salvar Edição</button>
                </fieldset>
            </form>
        </main>
    )
}