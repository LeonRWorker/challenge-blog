import { Content, Card, Image, Title, Legend, ViewMore } from "./styles";
import first from "../../assets/featured-image.png"
import { FiArrowRight } from "react-icons/fi"
export default function More () {
  return (
    <Content>
      <Card>
        <Title>
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </Title>
        <Legend>
          Quer receber dicas para melhorar sua produtividade e possivelmente uma vaga no mercado de trabalho, fique atento!
        </Legend>
        <ViewMore>
          Veja mais
          <FiArrowRight color="#4fff4b" />
        </ViewMore>
      </Card>
      <Card>
        <Image src={first} />
      </Card>
    </Content>
  )
}