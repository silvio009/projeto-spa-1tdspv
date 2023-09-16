import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CriarProduto(){
    document.title = "CriarProduto";

    const navigate = useNavigate()

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [desc, setDesc] = useState('')

    const [teste, setTeste] = useState([]);



    const aoAdicionar = (event) => {
    event.preventDefault();
    if (nome.trim() !== "" && preco.trim() !== "" && desc.trim() !== "" && id.trim() !== "") {
        const novoProduto = { nome, preco, desc, id };
        setTeste([...teste, novoProduto]);
        setId("");
        setNome("");
        setPreco("");
        setDesc("");

        alert("prduto adicionado")

        navigate("/produtos")

    }
  };

    return(
        <form onSubmit={aoAdicionar}> 
            <h1>Adicionar produtos</h1>
            <fieldset>
            <h2>Preenche os dados do produto</h2>
                <div>
                    <label>Id do produto</label>
                    <input 
                    type="text"
                    placeholder="Digite o id do produto"
                    value={id}
                    onChange={(event) => setId(event.target.value)} 
                    />
                </div>
                <div>
                    <label>Nome do produto</label>
                    <input 
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                     />
                </div>
                <div>
                    <label>Preço do produto</label>
                    <input 
                    type="text"
                    placeholder="Digite o preço do produto"
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                     />
                </div>
                <div>
                    <label>Descrição do produto</label>
                    <input 
                    type="text"
                    placeholder="Digite a descrição do produto"
                    value={desc}
                    onChange={(event) => setDesc(event.target.value)} 
                    />
                </div>
                <button type="submit">Adicionar</button>
            </fieldset>
        </form>
    )
}