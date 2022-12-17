import { Content, Dot, Search, Title, ToSearch, Icon, Navigation, Link } from "./styles";
import { FiSearch } from "react-icons/fi"

export default function Header () {
  return (
    <Content>
      <Title>
        Dev Blog
        <Dot>.</Dot>
      </Title>
      <Navigation>
        <Link>
          Home
        </Link>
        <Link>
          Sobre
        </Link>
        <Link>
          Categorias
        </Link>
        <Link>
          Contato
        </Link>
      </Navigation>
      <ToSearch>
        <Search placeholder="Buscar" />
        <Icon>
          <FiSearch />
        </Icon>
      </ToSearch>
    </Content>
  )
}