import { useNavigation, useRoute } from '@react-navigation/native'  
import { ScrollView } from "react-native";
import { HeaderStatistics } from "@components/Statistics/HeaderStatistics";
import { PercentHome } from "@components/App/PercentHome";
import { BoxStatistics, Container, Title } from "./styles";
import { useState } from 'react';
import { Loading } from '@components/App/Loading';

type RouteParams = {
  statusPercent: number;
  maxSequence: number;
  isInside: number;
  isOutSide: number;
  totalMealsRegister: number;
}

export function Statistics() {

  const navigation = useNavigation()
  const route = useRoute()
  const { 
    statusPercent,
    maxSequence,
    isInside,
    isOutSide,
    totalMealsRegister 
  } = route.params as RouteParams

  function handleDiet() {
    navigation.navigate('diet')
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  return (
    <Container>
      {
        isLoading ?
        <Loading/>
        :
        <>
        <HeaderStatistics
        percent={statusPercent}
        handleDiet={handleDiet}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>
            Estatísticas gerais
          </Title>
          <PercentHome
            type={1}
            percent={maxSequence}
            name="melhor sequência de pratos dentro da dieta"
          />
          <PercentHome
            type={1}
            percent={totalMealsRegister}
            name="refeições registradas"
          />
          <BoxStatistics>
            <PercentHome
              type={2}
              percent={isInside}
              name="refeições dentro da dieta"
            />
            <PercentHome
              type={3}
              percent={isOutSide}
              name="refeições fora da dieta"
              status={false}
            />
          </BoxStatistics>
        </ScrollView>
        </>
      }
    </Container>
  )

}