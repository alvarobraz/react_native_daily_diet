import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from "react-native";
import { HeaderNew } from "@components/New/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title, BoxButtom } from "./styles";
import { Input } from '@components/App/Input';
import { ButtomMeal } from '@components/App/ButtomMeal';
import { Buttom } from '@components/App/Buttom';
import { MealsSectionDTO } from '@dtos/Meal';
import { formatDate, formatTime } from '@utils/indx';
import { mealCreate } from '@storage/Meal/mealCreate';
import { getAllMeals } from '@storage/Meal/getAllMeals';


export function New() {

  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('diet')
  }

  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [isInsideTheDiet, setIsInsideTheDiet] = useState<boolean>(true);
  const [radioClicked, setRadioClicked] = useState('TERTIARY');
  const [Meals, setMeals] = useState<MealsSectionDTO[]>([]);


  function handleIsInsideTheDiet(status: boolean, clicked: string) {
    status === true ? setIsInsideTheDiet(true) : setIsInsideTheDiet(false)
    setRadioClicked(clicked)
  }

  function handleRegisterNewMeal() {
    if (
      mealName && 
      mealDescription && 
      mealDate && 
      mealTime && 
      (isInsideTheDiet === true || isInsideTheDiet === false) 
    ) {

      const newMeal = {
        name: mealName,
        description: mealDescription,
        date: mealDate,
        time: mealTime,
        isInsideTheDiet: isInsideTheDiet, 
      };

      setMeals((prevMeals) => [
        ...prevMeals,
        {
          title: mealDate,
          data: [newMeal],
        },
      ]);

      setMealName('');
      setMealDescription('');
      setMealDate('');
      setMealTime('');
    }
  }

  async function newMealCreate(Meals: MealsSectionDTO[]) {
    try {

      const storedData = await getAllMeals()

      const existingMeals = storedData ? storedData : [];
      const combinedMeals = [...existingMeals, ...Meals];

      const groupedMeals = combinedMeals.reduce((groups, meal) => {
        const existingGroup = groups.find((group: MealsSectionDTO) => group.title === meal.title);
        if (existingGroup) {
          existingGroup.data.push(...meal.data);
        } else {
          groups.push({ title: meal.title, data: meal.data });
        }
        return groups;
      }, [] as MealsSectionDTO[]);

      const mealsJSON = JSON.stringify(groupedMeals);
      await mealCreate(mealsJSON)
      navigation.navigate('diet');
      
    } catch (error) {
      throw error;
    }
  }

  useEffect(()=>{
    if(Meals.length !== 0) {
      newMealCreate(Meals)
    }
  },[Meals])

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
            value={mealName}
            onChangeText={(text) => setMealName(text)}
          />
          <Title>
            Descrição
          </Title>
          <Input 
            placeholder="Descrição da refeição"
            value={mealDescription}
            onChangeText={(text) => setMealDescription(text)}
            multiline={true}
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
              value={mealDate}
              onChangeText={(text) => setMealDate(formatDate(text))}
            />
          </HalfInput>
          <HalfInput>
            <Title>
              Hora
            </Title>
            <Input 
              placeholder="Hora"
              value={mealTime}
              onChangeText={(text) => setMealTime(formatTime(text))}
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
              onPress={()=>handleIsInsideTheDiet(true, 'TERTIARY')}
              radioClicked={radioClicked}
            />
          </HalfInput>
          <HalfInput>
          <ButtomMeal
              title='Não'
              typeIcon='QUARTARY'
              onPress={()=>handleIsInsideTheDiet(false, 'QUARTARY')}
              radioClicked={radioClicked}
            />
          </HalfInput>
        </BoxHalfInput>
        <BoxButtom>
          <Buttom
          title='Cadastrar refeição'
          icon={false}
          onPress={handleRegisterNewMeal}
          />
        </BoxButtom>
       </ScrollView>
    </Container>
  )
}