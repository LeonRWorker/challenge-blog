import { Content, Image, Message, Title, Date } from "./styles";

interface iCard {
  image: string
  date: string
  title: string
  message: string
}

export default function Card (props: iCard) {
  return (
    <Content>
      <Image src={props.image} />
      <Date>{ props.date }</Date>
      <Title>{ props.title }</Title>
      <Message>{ props.message }</Message>
    </Content>
  )
}