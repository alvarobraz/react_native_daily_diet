import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native";
import { HeaderNew } from "@components/New/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title, BoxButtom } from "./styles";
import { Input } from '@components/App/Input';
import { ButtomMeal } from '@components/App/ButtomMeal';
import { Buttom } from '@components/App/Buttom';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealsSectionDTO } from '@dtos/Meal';

export function New() {

  const navigation = useNavigation()

  function handleNew() {
    navigation.goBack()
  }

  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [isInsideTheDiet, setIsInsideTheDiet] = useState<boolean>();
  const [Meals, setMeals] = useState<MealsSectionDTO[]>([]);
  
  function handleIsInsideTheDiet(status: boolean) {
    status ? setIsInsideTheDiet(true) : setIsInsideTheDiet(false)
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

  async function mealCreate(Meals: MealsSectionDTO[]) {
    try {
      const mealsJSON = JSON.stringify(Meals);
      await AsyncStorage.setItem(MEAL_COLLECTION, mealsJSON);
    } catch (error) {
      throw error;
    }
  }

  useEffect(()=>{
    Meals.length ?? mealCreate(Meals)
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
              onChangeText={(text) => setMealDate(text)}
            />
          </HalfInput>
          <HalfInput>
            <Title>
              Hora
            </Title>
            <Input 
              placeholder="Hora"
              value={mealTime}
              onChangeText={(text) => setMealTime(text)}
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
              onPress={()=>handleIsInsideTheDiet(true)}
            />
          </HalfInput>
          <HalfInput>
          <ButtomMeal
              title='Não'
              typeIcon='QUARTARY'
              onPress={()=>handleIsInsideTheDiet(false)}
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