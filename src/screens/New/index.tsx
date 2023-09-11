import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from "react-native";
import { HeaderNew } from "@components/New/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title, BoxButtom, BoxMessageSuccessAndFail, TitleMessage, SubTitleMessage, BoxMessageImages, Images } from "./styles";
import { Input } from '@components/App/Input';
import { ButtomMeal } from '@components/App/ButtomMeal';
import { Buttom } from '@components/App/Buttom';
import { MealsSectionDTO } from '@dtos/Meal';
import { formatDate, formatTime } from '@utils/index';
import { mealCreate } from '@storage/Meal/mealCreate';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import imgSuccess from '../../assets/image_message_success.png';
import imgFail from '../../assets/image_message_fail.png'



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
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>();


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

      const storedDatMeals = await getAllMeals()

      const existingMeals = storedDatMeals ? storedDatMeals : [];
      const combinedMeals = [...existingMeals, ...Meals];

      const groupedMeals = combinedMeals.reduce((meals, newMeal) => {
        const existingGroup = meals.find((meal: MealsSectionDTO) => meal.title === newMeal.title);
        if (existingGroup) {
          existingGroup.data.push(...newMeal.data);
        } else {
          meals.push({ title: newMeal.title, data: newMeal.data });
        }
        return meals;
      }, [] as MealsSectionDTO[]);

      const mealsJSON = JSON.stringify(groupedMeals);
      await mealCreate(mealsJSON)

      const storedDataNewMeals = await getAllMeals()
      const getResult = storedDataNewMeals.some(meal => meal.data.some(item => item.isInsideTheDiet === false));
      console.log(getResult)
      setResult(getResult)
      setIsCreated(true)
    } catch (error) {
      throw error;
    }
  }

  function goHome() {
    navigation.navigate('diet');
  }

  useEffect(()=>{
    if(Meals.length !== 0) {
      newMealCreate(Meals)
    }
  },[Meals])

  return (
    <Container>
      {
        !isCreated ?
        <>
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
            name='add'
            />
          </BoxButtom>
        </ScrollView>
        </>
        :
        <>
        <BoxMessageSuccessAndFail>
          <TitleMessage typeTitle={!result ? 'success': 'fail'}>
            {!result ? 'Continue Assim': 'Que pena!'}
          </TitleMessage>
          <SubTitleMessage>
          {!result ? 'Você continua dentro da dieta. Muito bem!': 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
          </SubTitleMessage>
        </BoxMessageSuccessAndFail>
        <BoxMessageImages>
        {!result ? 
         <Images
         source={imgSuccess}
         />
         : 
         <Images
          source={imgFail}
          />
        }
         
        </BoxMessageImages>
        <BoxButtom>
        <Buttom
          title='Ir para a página inicial'
          icon={false}
          onPress={goHome}
          name='add'
        />
        </BoxButtom>
        </>
        
      }
      
    </Container>
  )
}