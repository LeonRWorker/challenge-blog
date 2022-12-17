import { Container, Content, Section, Cards, MainCard, NoCards, NoCard, HiddenHR, HR } from "./styles";
import { Date, Message, Title } from "../Card/styles";
import first from "./../../assets/post-2.png"
import second from "./../../assets/post-3.png"
import third from "./../../assets/post-4.png"
import Header from "../Header";
import More from "../More";
import Card from "../Card";

export default function Main () {
  return (
    <Container>
      <Content>
        <Section>
          <Header />
          <More />
        </Section>
        <Section>
          <MainCard>
            <Card
              image={first}
              date="Janeiro 04, 2022"
              title="Começando no React JS em 2022"
              message="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            />
            <HiddenHR /> 
            <NoCards>
              <NoCard>
                <Date>Janeiro 04. 2022</Date>
                <Title>Conheça as principais técnicas para conseguir uma vaga internacional em programação</Title>
                <Message>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Message>
              </NoCard>
              <HR />
              <NoCard>
                <Date>Janeiro 04. 2022</Date>
                <Title>Veja a evolução do Front-end na pática</Title>
                <Message>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Message>
              </NoCard>
            </NoCards>
          </MainCard>
          <Cards>
            <Card 
              image={first}
              date="Janeiro 04, 2002"
              title="10 dicas para conseguir a vaga desejada"
              message="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            />
            <HiddenHR /> 
            <Card 
              image={second}
              date="Janeiro 04, 2002"
              title="Deixe seu código mais semêntico com essas dicas"
              message="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            />
            <HiddenHR /> 
            <Card
              image={third}
              date="Janeiro 04, 2002"
              title="Use essas dicas nas suas aplicações mobile"
              message="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            />
          </Cards>
        </Section>
      </Content>
    </Container>
  )
}