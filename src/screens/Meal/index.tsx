import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'  
import { BoxButtons, Container, StatusMeal, SubTitle, Title, TitleStatus } from "./styles";
import { HeaderNew } from '@components/New/HeaderNew';
import { ButtonIcon } from '@components/App/ButtonIcon';
import { Buttom } from '@components/App/Buttom';
import { useCallback, useState } from 'react';
import { MealStorageDTO } from '@dtos/Meal';
import { Loading } from '@components/App/Loading';
import { checkStoredDataShowMeal } from '@utils/index';

type RouteParams = {
  dateTime: string;
}

export function Meal() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meal, setMeal] = useState<MealStorageDTO | void>();

  const route = useRoute()
  const navigation = useNavigation()
  const { dateTime } = route.params as RouteParams

  function handleNew() {
    navigation.navigate('diet')
  }
  
  async function getShowMeal(datetime: string) {
    setIsLoading(true);
    const showMeal = await checkStoredDataShowMeal(datetime)
    setMeal(showMeal)
    setIsLoading(false);
  } 

  function handleEditMeal() {
    navigation.navigate('new', { dateTime: dateTime })
  }

  useFocusEffect(useCallback(() => {
    getShowMeal(dateTime)
    // clearMealCollection()
	}, [dateTime]));

  return (
    <Container>
      <HeaderNew
        name='Refeição'
        handleNew={handleNew}
        type={meal?.isInsideTheDiet ? 'PRIMARY' : 'SECONDARY'}
      />
      {
        isLoading ?
        <Loading/>
        :
        <>
        <Title>
          {meal?.name}
        </Title>
        <SubTitle>
          {meal?.description}
        </SubTitle>
        <Title>
          Data e hora
        </Title>
        <SubTitle>
        {meal?.date} às {meal?.time}
        </SubTitle>
        <StatusMeal>
          <ButtonIcon
            icon="circle"
            size={8}
            typeIcon={meal?.isInsideTheDiet ? 'TERTIARY' : 'QUARTARY'}
          />
          <TitleStatus>
            {meal?.isInsideTheDiet ? 'dentro da dieta' : 'fora da dieta'} 
          </TitleStatus>
        </StatusMeal>
        </>
      }
      <BoxButtons>
        <Buttom
          title='Editar refeição'
          name='border-color'
          size={16}
          handleButton={handleEditMeal}
        />
        <Buttom
          title='Excluir refeição'
          type='SECONDARY'
          typeIcon='SECONDARY'
          name='delete-outline'
          size={16}
        />
      </BoxButtons>
    </Container>
  )
}