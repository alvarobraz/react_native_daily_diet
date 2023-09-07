import { Buttom } from '@components/Buttom';
import { Container, Title } from './styles';
import { HeaderHome } from '@components/HeaderHome';
import { PercentHome } from '@components/PercentHome';
import { DailyMeals } from '@components/DailyMeals';
import { Text, SectionList } from 'react-native';
import { useState } from 'react';

export function Diet() {

  const percent = 90.86

  type MealStorageDTO = {
    name: string;
    description: string;
    date: string;
    time: string;
    isInsideTheDiet: boolean;
  }

  type MealsSectionDTO = {
    title: string;
    data: MealStorageDTO[];
  }

  const dataMeal = [
    {
      title: '07/09/2023',
      data: [
        { name: 'Couve', date: '07/09/2023', time: '08:00', isInsideTheDiet: true },
        { name: 'X- Tudo', date: '07/09/2023', time: '10:00', isInsideTheDiet: false },
      ],
    },
    {
      title: '08/09/2023',
      data: [
        { name: 'Alfaçe', date: '08/09/2023', time: '08:00', isInsideTheDiet: true },
        { name: 'Burrito', date: '08/09/2023', time: '10:00', isInsideTheDiet: false },
      ],
    },
    {
      title: '08/09/2023',
      data: [
        { name: 'Alfaçe', date: '08/09/2023', time: '08:00', isInsideTheDiet: true },
        { name: 'Burrito', date: '08/09/2023', time: '10:00', isInsideTheDiet: false },
      ],
    },
    {
      title: '08/09/2023',
      data: [
        { name: 'Alfaçe', date: '08/09/2023', time: '08:00', isInsideTheDiet: true },
        { name: 'Burrito', date: '08/09/2023', time: '10:00', isInsideTheDiet: false },
      ],
    },
  ];

  const [mealsInSection, setMealsInSection] = useState<MealsSectionDTO[]>([]);
  
  return (
    <Container>
     <HeaderHome />
     <PercentHome
      percent={percent}
    />
    <Title>
      Refeições
    </Title>
    <Buttom
      title='Nova Refeição'
    />
     <SectionList
        sections={ dataMeal }
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
          dataMeal.length === 0
            ? { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }
            : { paddingBottom: '40%' }
        }
        ListEmptyComponent={() => (
          <Text>Ainda não há refeições cadastradas, adicione sua primeira refeição acima.</Text>
        )}
      />
    </Container>
  );
}