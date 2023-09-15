import React from 'react'

export default function ExcluirProdutos() {
  return (

    <>
    <h1>Excluir produtos </h1>

    <div>
        <section>
          <h2>Produto selecionado para exclusão</h2>
          <h3> voce tem certeza de que desaja excluir esse produto ? </h3>
          <figure>
            <img src="" alt="" />
            <figcaption>
              Nome - R$ PREÇO
            </figcaption>
            <button> Excluir </button>
            <button> Cancelar </button>
          </figure>
        </section>
    </div>
    </>
  )
}