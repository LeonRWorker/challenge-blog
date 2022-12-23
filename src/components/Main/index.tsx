import { Container, Content, Dot, Header, Icon, Link, Navigation, Search, Section, Title, ToSearch } from "./styles";
import { Contact } from "../Contact";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Main () {
  const [showComponent, setShowComponent] = useState(0)
  return (
    <Container>
      <Content>
        <Section>
          <Header>
            <Title>
              Dev Blog
              <Dot>.</Dot>
            </Title>
            <Navigation>
              <Link onClick={() => { setShowComponent(1) }}>Home</Link>
              <Link onClick={() => { setShowComponent(2) }}>Categorias</Link>
              <Link onClick={() => { setShowComponent(3) }}>Sobre</Link>
              <Link onClick={() => { setShowComponent(4) }}>Contato</Link>
            </Navigation>
            <ToSearch>
              <Search placeholder="Buscar" />
              <Icon>
                <FiSearch />
              </Icon>
            </ToSearch>
          </Header>
        </Section>
        <Section>
          { showComponent == 4 && (<Contact />) }
        </Section>
      </Content>
    </Container>
  )
}