import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, ScrollView } from "react-native";
import { HeaderNew } from "@components/New/HeaderNew";
import { BoxHalfInput, BoxTopInput, Container, HalfInput, Title, BoxButtom, BoxMessageSuccessAndFail, TitleMessage, SubTitleMessage, BoxMessageImages, Images } from "./styles";
import { Input } from '@components/App/Input';
import { ButtomMeal } from '@components/App/ButtomMeal';
import { Buttom } from '@components/App/Buttom';
import { MealStorageDTO } from '@dtos/Meal';
import { checkStoredDataShowMeal, combineDataMeals, errorHandler, formatDate, formatTime, removeDataMeal } from '@utils/index';
import { mealCreate } from '@storage/Meal/mealCreate';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import imgSuccess from '../../assets/image_message_success.png';
import imgFail from '../../assets/image_message_fail.png'
import { Loading } from '@components/App/Loading';

type RouteParams = {
  dateTime?: string;
}

export function New() {

  const navigation = useNavigation()
  const route = useRoute()
  const { dateTime } = route.params as RouteParams

  function handleNew() {
    navigation.navigate('diet')
  }

  const [mealName, setMealName] = useState<string>();
  const [mealDescription, setMealDescription] = useState<string>();
  const [mealDate, setMealDate] = useState<string>();
  const [mealTime, setMealTime] = useState<string>();
  const [isInsideTheDiet, setIsInsideTheDiet] = useState<boolean>(true);
  const [radioClicked, setRadioClicked] = useState('TERTIARY');
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meal, setMeal] = useState<MealStorageDTO | undefined>();

  function handleIsInsideTheDiet(status: boolean, clicked: string) {
    status === true ? setIsInsideTheDiet(true) : setIsInsideTheDiet(false)
    setRadioClicked(clicked)
  }

  async function handleRegisterNewMeal() {
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

      const dataNewMeal = {
        title: mealDate,
        data: [newMeal],
      }

      const storedDatMeals     = await getAllMeals()
      const allMealsInSection  = storedDatMeals ? storedDatMeals : [];
      const existDataMeal = await errorHandler(mealDate, mealTime, allMealsInSection)
      if(existDataMeal === true) {
        return Alert.alert(
          'Erro',
          'Já existe um registro com a mesma data e hora.'
        )
      }
      
      const groupedMeals       = await combineDataMeals(allMealsInSection, dataNewMeal)
      const mealsJSON          = JSON.stringify(groupedMeals);
      await mealCreate(mealsJSON)

      const storedDataNewMeals = await getAllMeals()
      const getResult = storedDataNewMeals.some(meal => meal.data.some(item => item.isInsideTheDiet === false));
      
      setResult(getResult)
      setIsCreated(true)
      setMealName('');
      setMealDescription('');
      setMealDate('');
      setMealTime('');
    }
  }

  function goHome() {
    navigation.navigate('diet');
  }

  async function getShowMeal(datetime: string) {

    setIsLoading(true);
    const result = await checkStoredDataShowMeal(datetime);
    if (result === undefined) {
      setIsLoading(false);
      return;
    }
    const { isInsideTheDiet } = result;
  
    if (isInsideTheDiet === true) {
      setRadioClicked('TERTIARY');
    } else {
      setRadioClicked('QUARTARY');
    }
    setMeal(result);
    setIsLoading(false);
  }

  async function handleEditMeal() {

    if(meal !== undefined) {

      const editMeal = {
        name: mealName ? mealName : meal.name,
        description: mealDescription ? mealDescription : meal.description,
        date: mealDate ? mealDate : meal.date,
        time: mealTime ? mealTime : meal.time,
        isInsideTheDiet: 
        isInsideTheDiet === true ? 
        isInsideTheDiet : 
        isInsideTheDiet === false ? 
        isInsideTheDiet :
        meal.isInsideTheDiet, 
      };

      if(dateTime === undefined) {
        return
      }

      const [date, time] = dateTime.split('-')
      const allMealsInSection = await getAllMeals();

      const sectionIndex = allMealsInSection.findIndex(item => item.title === date);
      if (sectionIndex !== -1) {

        const dataIndex = allMealsInSection[sectionIndex].data.findIndex(item => {
          return item.date === date && item.time === time;
        });

        if (dataIndex !== -1) {

          const mealDateNew = mealDate ? mealDate : date;
          const mealTimeNew = mealTime ? mealTime : time;
         
          if(mealDate !== undefined || mealTime !== undefined) {
            const existDataMeal = await errorHandler(mealDateNew, mealTimeNew, allMealsInSection)
            if(existDataMeal === true) {
              return Alert.alert(
                'Erro',
                'Já existe um registro com a mesma data e hora.'
              )
            }
          }
          
          await removeDataMeal(allMealsInSection, date, time)

          const newSectionIndex = {
            title: mealDateNew,
            data: [
              editMeal
            ]
          }

          const groupedMeals = await combineDataMeals(allMealsInSection, newSectionIndex)
          const filteredMeals = groupedMeals.filter(item => item.data.length > 0);
          const mealsJSON = JSON.stringify(filteredMeals);
          await mealCreate(mealsJSON)

          navigation.navigate('diet');
        }
      }
    }
  }

  useEffect(()=>{
    if(dateTime !== undefined) {
      getShowMeal(dateTime)
    }
  },[dateTime])

  return (
    <Container>
      {
        isLoading ?
        <Loading/>
        :
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
              value={mealName || mealName === '' ? mealName : meal?.name ? meal?.name : mealName}
              onChangeText={(text) => setMealName(text)}
            />
            <Title>
              Descrição
            </Title>
            <Input 
              placeholder="Descrição da refeição"
              value={mealDescription || mealDescription === '' ? mealDescription : meal?.description ? meal?.description : mealDescription}
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
                value={mealDate || mealDate === '' ? mealDate : meal?.date ? meal?.date : mealDate}
                onChangeText={(text) => setMealDate(formatDate(text))}
              />
            </HalfInput>
            <HalfInput>
              <Title>
                Hora
              </Title>
              <Input 
                placeholder="Hora"
                value={mealTime || mealTime === '' ? mealTime : meal?.time ? meal?.time : mealTime}
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
            {
              dateTime === undefined ?
              <Buttom
                title='Cadastrar refeição'
                icon={false}
                onPress={handleRegisterNewMeal}
                name='add'
              />
              :
              <Buttom
                title='Salvar alterações'
                icon={false}
                onPress={handleEditMeal}
                name='add'
            />
            }
            
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