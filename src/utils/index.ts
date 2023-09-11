import { MealsSectionDTO } from "@dtos/Meal";
import { getAllMeals } from "@storage/Meal/getAllMeals";
import { useState } from "react";
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

