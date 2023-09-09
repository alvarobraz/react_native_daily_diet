import { useFocusEffect, useNavigation } from '@react-navigation/native'  
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, ListEnpty, Title } from './styles';
import { HeaderHome } from '@components/Home/HeaderHome';
import { DailyMeals } from '@components/Home/DailyMeals';
import { PercentHome } from '@components/App/PercentHome';
import { Buttom } from '@components/App/Buttom';
import { SectionList, Alert } from 'react-native';
import { useCallback, useState } from 'react';
import { MealsSectionDTO } from '@dtos/Meal';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import { Loading } from '@components/App/Loading';
import { calcPercentMeal } from '@utils/indx';

export function Diet() {

  const navigation = useNavigation()

  function handleStatistics() {
    navigation.navigate('statistics')
  }

  function handleButton() {
    navigation.navigate('new')
  }

  

  const [mealsInSection, setMealsInSection] = useState<MealsSectionDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState(0);
  // const percent = 90.86

  async function checkStoredDataMeal() {
		try {
			setIsLoading(true);
			const allMealsInSection = await getAllMeals();
			setMealsInSection(allMealsInSection);
		} catch (error) {
			console.log(error);
			return Alert.alert(
				'Erro',
				'Ocorreu um erro ao carregar as refeições. Por favor, feche o app e tente novamente.'
			)
		} finally {
			setIsLoading(false);
		}
	}
  
  async function clearStorage() {
    try {
      await AsyncStorage.clear();
      console.log('O AsyncStorage foi limpo com sucesso.');
    } catch (error) {
      console.error('Erro ao limpar o AsyncStorage:', error);
    }
  }

  async function percentMeal() {
    const isPercente = await calcPercentMeal(mealsInSection)
    // console.log(isPercente)
    setPercent(isPercente)
  }

  
  useFocusEffect(useCallback(() => {
		checkStoredDataMeal() 
    percentMeal()
    // clearStorage()
	}, []));

  return (
    <Container>
     <HeaderHome />
     <PercentHome
      type={1}
      percent={percent}
      name="das refeições dentro da dieta"
      icon={true}
      handleStatistics={handleStatistics}
    />
    <Title>
      Refeições
    </Title>
    <Buttom
      title='Nova Refeição'
      onPress={handleButton}
    />
    {
      isLoading ?
      <Loading/>
      :
      <SectionList
        sections={ mealsInSection }
        keyExtractor={ item => item.date + '-' + item.time }
        renderItem={({ item }) => (
          <DailyMeals
            name={ item.name }
            hour={ item.time }
            isInsideTheDiet={ item.isInsideTheDiet }
          />
        )}
        renderSectionHeader={({ section }) => {
          const [day, month, year] = section.title.split('/');
          const newYear = year.substring(2, 4);

          return <Title>{ day }.{ month }.{ newYear }</Title>
        }}
        showsVerticalScrollIndicator={ false} 
        contentContainerStyle={
          mealsInSection.length === 0
            ? { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }
            : { paddingBottom: '40%' }
        }
        ListEmptyComponent={() => (
          <ListEnpty>Ainda não há refeições cadastradas, adicione sua primeira refeição acima.</ListEnpty>
        )}
      />
    }
    </Container>
  );
}