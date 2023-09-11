import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'  
import { Modal } from "react-native";
import { BoxButtons, Container, StatusMeal, SubTitle, Title, TitleStatus, ModalContainer, ModalContent, ModalText, ButtonContainer } from "./styles";
import { HeaderNew } from '@components/New/HeaderNew';
import { ButtonIcon } from '@components/App/ButtonIcon';
import { Buttom } from '@components/App/Buttom';
import { useCallback, useState } from 'react';
import { MealStorageDTO } from '@dtos/Meal';
import { Loading } from '@components/App/Loading';
import { checkStoredDataShowMeal, removeDataMeal } from '@utils/index';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import { mealCreate } from '@storage/Meal/mealCreate';

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

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  async function handleDelete() {

    const allMealsInSection = await getAllMeals();
    const [date, time]      = dateTime.split('-')

    await removeDataMeal(allMealsInSection, date, time)

    const filteredMeals = allMealsInSection.filter(item => item.data.length > 0);
    const mealsJSON     = JSON.stringify(filteredMeals);
    await mealCreate(mealsJSON)
    navigation.navigate('diet');
  };

  useFocusEffect(useCallback(() => {
    getShowMeal(dateTime)
	}, [dateTime]));

  return (
    <Container>
      <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={hideModal}
        >
          <ModalContainer>
            <ModalContent>
              <ModalText>Você realmente quer excluir esta refeição?</ModalText>
              <ButtonContainer>
              <Buttom
                title='Cancelar'
                type='SECONDARY'
                width='120px'
                name='add'
                icon={false}
                size={16}
                onPress={hideModal}
              />
              <Buttom
                title='Sim, excluir'
                type='PRIMARY'
                width='120px'
                name='add'
                icon={false}
                size={16}
                onPress={handleDelete}
              />
              </ButtonContainer>
            </ModalContent>
          </ModalContainer>
        </Modal>
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
          onPress={showModal}
        />
      </BoxButtons>
    </Container>
  )
}