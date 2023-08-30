import reactLogo from "./assets/react.svg"
import Conteudo from "./components/Conteudo"
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"

export default function App() {
  let reactlogoTextoalt = "logo react"
  // area declarativa
  return (
    <>
      {/*area imperativa*/}
     <div>
      {/*um cabeçalho com um header, um h1 , uma lista ul , com 3 links*/}
       <Cabecalho/>
      {/*uma seção com uma div com 3 paragrafos, com 3  linhas de lorem, uma img */}
      <Conteudo reactLogo ={reactLogo} reactlogoTextoaltProps={reactlogoTextoalt}/>


      {/*um rodape com uma div , uma lista ul com3 itens e links para redes sociais  */}
      <Rodape/>
    </div>
    </>
  )
}