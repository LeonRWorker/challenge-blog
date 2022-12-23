import { Content, Title, Continue, Options, Option, Text, Forms, FieldSets, FieldSet, Label, Field, Message, ReturnOrContinue, ContactMe, Select, SelectOption, CheckBox, ToCheck } from "./styles"
import { FiPenTool, FiBriefcase, FiShoppingCart } from "react-icons/fi" 
import { FaRegSmile, FaComments, FaTable } from "react-icons/fa" 
import { useState } from "react"

export const Contact = () => {
  const [reason, setReason] = useState('')
  const [showComponent, setShowComponent] = useState(true)
  return (
    <Content>
      { showComponent && (<>
        <Title>Se deseja adquirir os meus serviços ou contribuir com sugestões, selecione uma das opções abaixo</Title>
        <Options>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('Web Design') }} />
            <Option>
              <FiPenTool />
              <Text>Web Design</Text>
              <Text>Preciso de ajuda para desenvolver um site.</Text>
            </Option>
          </ToCheck>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('Website Development') }} />
            <Option>
              <FiShoppingCart />
              <Text>Website Development</Text>
              <Text>Preciso de um site pronto.</Text>
             </Option>
          </ToCheck>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('Solution') }} />
            <Option>
              <FaTable />
              <Text>Solution</Text>
              <Text>Preciso de uma ferramenta ou sulução.</Text>
            </Option>
          </ToCheck>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('UX Research') }} />
            <Option>
              <FaRegSmile />
              <Text>UX Research</Text>
              <Text>Eu quero entender os usuários.</Text>
            </Option>
          </ToCheck>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('Work') }} />
            <Option>
              <FiBriefcase />
              <Text>Work</Text>
              <Text>Eu quero lhe integrar em uma equipe de desenvolvimento.</Text>
            </Option>
          </ToCheck>
          <ToCheck>
            <CheckBox type={'radio'} name="check" onClick={() => { setReason('Feedback') }} />
            <Option>
              <FaComments />
              <Text>Feedback</Text>
              <Text>Gostaria de contribuir com sugestões para ajudar o blog.</Text>
            </Option>
          </ToCheck>
        </Options>
        { reason && (<Continue  onClick={() => { setShowComponent(false) }} >Continuar</Continue>) }
      </>) }
      { !showComponent && (
        <>
          <ContactMe>Contate-me</ContactMe>
          <Forms>
            <FieldSets>
              <FieldSet>
                <Label>Nome</Label>
                <Field type={'text'} placeholder={'Leonardo Marques'} />
              </FieldSet>
              <FieldSet>
                <Label>Motivo</Label>
                <Select disabled>
                  <SelectOption>{ reason }</SelectOption>
                </Select>
              </FieldSet>
              <FieldSet>
                <Label>E-mail</Label>
                <Field type={'text'} placeholder={'devblog@gmail.com'} />
              </FieldSet>
            </FieldSets>
            <Label>Mensagem</Label>
            <Message placeholder={'Informe algo aqui...'} />
          </Forms>
          <ReturnOrContinue>
            <Continue onClick={() => { setShowComponent(true) }} >Retornar</Continue>
            <Continue onClick={() => {  }} >Enviar</Continue>
          </ReturnOrContinue>
        </>
      ) }
    </Content>
  )
}