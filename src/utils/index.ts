import { MealStorageDTO, MealsSectionDTO } from "@dtos/Meal";
import { getAllMeals } from "@storage/Meal/getAllMeals";
import { Alert } from "react-native";

export function formatDate(text: string) {
  const cleanedText = text.replace(/\D/g, ''); // Remove caracteres não numéricos
  let formattedText = '';

  
  for (let i = 0; i < cleanedText.length; i++) {
    if (i === 2 || i === 4) {
      formattedText += '/';
    }
    formattedText += cleanedText[i];
  }

  if (cleanedText.length > 8) {
    return formattedText.slice(0, 10);
  }


  return formattedText;
};

export function formatTime(text: string) {
  const cleanedText = text.replace(/\D/g, ''); // Remove caracteres não numéricos
  let formattedText = '';

  for (let i = 0; i < cleanedText.length; i++) {
    if (i === 2) {
      formattedText += ':';
    }
    formattedText += cleanedText[i];
  }

  if (cleanedText.length > 4) {
    return formattedText.slice(0, 5);
  }

  return formattedText;
}

export async function calcPercentMeal(mealsInSection: MealsSectionDTO[]) {

  try {
    let statusPercent = 0;
    let currentSequence = 0;
    let maxSequence = 0;

    if(mealsInSection.length !== 0) {
      const { isInside, isOutSide } = mealsInSection.reduce(
        (counts, item) => {
          let prevIsInside = false;
  
          item.data.forEach((entry) => {
            if (entry.isInsideTheDiet) {
              counts.isInside++;
              if (!prevIsInside) {
                currentSequence = 1;
              } else {
                currentSequence++;
              }
            } else {
              counts.isOutSide++;
              currentSequence = 0;
            }
  
            prevIsInside = entry.isInsideTheDiet;
  
            if (currentSequence > maxSequence) {
              maxSequence = currentSequence;
            }
          });
          return counts;
        },
        { isInside: 0, isOutSide: 0 }
      );
  
      const totalMealsRegister = isInside + isOutSide;
      const truePercentage = (isInside / totalMealsRegister) * 100;
      const falsePercentage = (isOutSide / totalMealsRegister) * 100;
  
      const roundedTruePercentage = truePercentage.toFixed(2);
  
      statusPercent = parseFloat(roundedTruePercentage);
  
      if (statusPercent <= 30) {
        statusPercent = falsePercentage;
      }
  
      return {
        statusPercent,
        totalMealsRegister,
        isInside,
        isOutSide,
        maxSequence,
      }
    }
    
    return {
      statusPercent: 0,
      totalMealsRegister: 0,
      isInside: 0,
      isOutSide: 0,
      maxSequence: 0,
    }

    

  } catch (error) {
    throw error;
  }
}

export async function checkStoredDataShowMeal(dateTime: string) {
  try {
    const allMealsInSection = await getAllMeals();
    const [dateParam, timeParam] = dateTime.split('-'); 
    const matchingMeal = allMealsInSection.find(meal => {
      return meal.data.some(item => item.date === dateParam && item.time === timeParam);
    });

    if (matchingMeal) {
      const showMeal = matchingMeal.data.find(item => item.date === dateParam && item.time === timeParam);
      return showMeal
    }
    
  } catch (error) {
    console.log(error);
    return Alert.alert(
      'Erro',
      'Ocorreu um erro ao carregar as refeições. Por favor, feche o app e tente novamente.'
    )
  }
}

export function sortDataMeals(allMealsInSection: MealsSectionDTO[]) {

  return allMealsInSection.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
  
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

}

export async function errorHandler(mealDateNew:string, mealTimeNew: string, allMealsInSection: MealsSectionDTO[]) {
  const sectionIndexExistsDate = allMealsInSection.findIndex(item => item.title === mealDateNew);         
  if(sectionIndexExistsDate !== -1) {
    
    const dataIndexExistsDate = allMealsInSection[sectionIndexExistsDate].data.findIndex(item => {
      return item.date == mealDateNew && item.time == mealTimeNew;
    });

    if(dataIndexExistsDate !== -1) {
      return true
    }
  }
}

export async function removeDataMeal(allMealsInSection: MealsSectionDTO[], date: string, time: string) {
  const dataSectionIndex = allMealsInSection.findIndex(item => {
    return item.data.some(meal => meal.date === date && meal.time === time);
  });

  if (dataSectionIndex !== -1) {
    const mealIndexToRemove = allMealsInSection[dataSectionIndex].data.findIndex(meal => meal.date === date && meal.time === time);
    
    if (mealIndexToRemove !== -1) {
      return allMealsInSection[dataSectionIndex].data.splice(mealIndexToRemove, 1);
    }
  }

  return allMealsInSection
}

export async function combineDataMeals(allMealsInSection: MealsSectionDTO[], newSectionIndex: MealsSectionDTO) {

  const combinedMeals  = [...allMealsInSection, newSectionIndex];

  return combinedMeals.reduce((meals, newMeal) => {
    const existingGroup = meals.find((meal: MealsSectionDTO) => meal.title === newMeal.title);
    if (existingGroup) {
      existingGroup.data.push(...newMeal.data);
    } else {
      meals.push({ title: newMeal.title, data: newMeal.data });
    }
    return meals;
  }, [] as MealsSectionDTO[]);
}

