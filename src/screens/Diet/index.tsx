import { useFocusEffect, useNavigation } from '@react-navigation/native'  
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
import { calcPercentMeal } from '@utils/index';
import { clearMealCollection } from '@storage/Meal/removeMeal';

// type PropsPercent = {
//   statusPercent: number;
//   maxSequence:number;
//   isInside: number;
//   isOutSide: number;
//   totalMealsRegister: number;
// }

export function Diet() {

  const navigation = useNavigation()

  function handleButton() {
    navigation.navigate('new')
  }

  const [mealsInSection, setMealsInSection] = useState<MealsSectionDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusPercent, setStatusPercent] = useState(0);
  const [totalMealsRegister, setTotalMealsRegister] = useState(0);
  const [maxSequence, setMaxSequence] = useState(0);
  const [isInside, setIsInside] = useState(0);
  const [isOutSide, setIsOutSide] = useState(0);

  async function checkStoredDataMeal() {
		try {
			setIsLoading(true);
			const allMealsInSection = await getAllMeals();
			setMealsInSection(allMealsInSection);
      const percentages = await calcPercentMeal(allMealsInSection)
      console.log(percentages)
      setStatusPercent(percentages.statusPercent)
      setTotalMealsRegister(percentages.totalMealsRegister)
      setMaxSequence(percentages.maxSequence)
      setIsInside(percentages.isInside)
      setIsOutSide(percentages.isOutSide)
      setIsLoading(false);
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

  function handleStatistics() {
    navigation.navigate('statistics', { statusPercent, isInside, isOutSide, totalMealsRegister, maxSequence })
  }
  
  useFocusEffect(useCallback(() => {
		checkStoredDataMeal() 
    // clearMealCollection()
	}, []));

  console.log(statusPercent)

  return (
    <Container>
     <HeaderHome />
     <PercentHome
      type={1}
      percent={statusPercent}
      name="das refeições dentro da dieta"
      icon={true}
      isHavePercent={true}
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