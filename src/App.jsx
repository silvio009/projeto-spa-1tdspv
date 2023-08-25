import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/Cabecalho"
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
      <section>
        <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum ab fugiat pariatur nisi nam magnam consequatur voluptate corporis, excepturi aspernatur nesciunt. Molestias quia quae earum quo magni iste tempore.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum ab fugiat pariatur nisi nam magnam consequatur voluptate corporis, excepturi aspernatur nesciunt. Molestias quia quae earum quo magni iste tempore.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum ab fugiat pariatur nisi nam magnam consequatur voluptate corporis, excepturi aspernatur nesciunt. Molestias quia quae earum quo magni iste tempore.</p>
         <img src={reactLogo} alt={reactlogoTextoalt} />
        </div>
      </section>
      {/*um rodape com uma div , uma lista ul com3 itens e links para redes sociais  */}
      <footer>
        <div>
          <ul>
            <li><a href="#"></a>github</li>
            <li><a href="#"></a>x</li>
            <li><a href="#"></a>insta</li>
          </ul>
        </div>
      </footer>
     </div>
      
    </>
  )
}