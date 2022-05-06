import Layout from '../components/layout';
import { HeadingMd, GridContainer, GridItem } from "../style/utils.module"

const stack = [
    {
      nome: ".NET Core / .NET Framework",
      caminhoImg: "",
    },
    {
      nome: "Python",
      caminhoImg: "",
    },
    {
      nome: "ORM Entity FrameWork Core",
      caminhoImg: ""
    },
    {
      nome: "Banco de dados MSSQL",
      caminhoImg: ""
    },
    {
      nome: "ReactJS",
      caminhoImg: "",
    },
  ]

function Home(){
  return (
    <Layout>
      <HeadingMd>
        <p>
          Olá! Meu nome é Gabriel e eu sou um desenvolvedor de software
        </p>
      </HeadingMd>
      <GridContainer>
        {
          stack.map(s => {
            <GridItem>{s.nome}</GridItem>
          })
        }
      </GridContainer>
    </Layout>
  )
}

export default Home;
