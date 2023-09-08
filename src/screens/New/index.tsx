import { useNavigation } from '@react-navigation/native' 
import { ScrollView } from "react-native";
import { HeaderNew } from "@components/New/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title, BoxButtom } from "./styles";
import { Input } from '@components/App/Input';
import { ButtomMeal } from '@components/App/ButtomMeal';
import { Buttom } from '@components/App/Buttom';


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
            <ButtomMeal
              title='Sim'
              typeIcon='TERTIARY'
            />
          </HalfInput>
          <HalfInput>
          <ButtomMeal
              title='Não'
              typeIcon='QUARTARY'
            />
          </HalfInput>
        </BoxHalfInput>
        <BoxButtom>
          <Buttom
          title='Cadastrar refeição'
          icon={false}
          />
        </BoxButtom>
       </ScrollView>
    </Container>
  )
}