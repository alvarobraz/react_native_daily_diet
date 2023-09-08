import { useNavigation } from '@react-navigation/native' 
import { HeaderNew } from "@components/HeaderNew";
import { Container } from "./styles";


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
    </Container>
  )
}