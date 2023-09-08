import { useNavigation } from '@react-navigation/native' 
import { ScrollView } from "react-native";
import { HeaderNew } from "@components/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title } from "./styles";
import { Input } from '@components/Input';


export function New() {

  const navigation = useNavigation()

  function handleNew() {
    navigation.goBack()
  }


  return (
    <Container>
      <HeaderNew
        name="Nova refeição"
        handleNew={handleNew}
      />
       <ScrollView showsVerticalScrollIndicator={false}>
        <BoxTopInput>
          <Title>
            Nome
          </Title>
          <Input 
            placeholder="Nome da refeição"
            onChangeText={()=>{}}
          />
          <Title>
            Descrição
          </Title>
          <Input 
            placeholder="Descrição da refeição"
            onChangeText={()=>{}}
            type='TEXTAREA'
          />
        </BoxTopInput>
        <BoxHalfInput>
          <HalfInput>
            <Title>
              Data
            </Title>
            <Input 
              placeholder="Data"
              onChangeText={()=>{}}
            />
          </HalfInput>
          <HalfInput>
            <Title>
              Hora
            </Title>
            <Input 
              placeholder="Hora"
              onChangeText={()=>{}}
            />
          </HalfInput>
        </BoxHalfInput>

        <BoxHalfInput>
        <Title>
          Está dentro da diéta?
        </Title>
        </BoxHalfInput>
        
        <BoxHalfInput>
          <HalfInput>
            <Input 
              placeholder="Data"
              onChangeText={()=>{}}
            />
          </HalfInput>
          <HalfInput>
            <Input 
              placeholder="Hora"
              onChangeText={()=>{}}
            />
          </HalfInput>
        </BoxHalfInput>
       </ScrollView>
    </Container>
  )
}