import { MealsSectionDTO } from "@dtos/Meal";

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

  let trueCount = 0;
  let falseCount = 0;

  mealsInSection.forEach((item) => {
    item.data.forEach((entry) => {
      if (entry.isInsideTheDiet) {
        trueCount++;
      } else {
        falseCount++;
      }
    });
  });

  const totalDates = mealsInSection.reduce((acc, item) => acc + item.data.length, 0);
  const truePercentage = (trueCount / totalDates) * 100;
  const falsePercentage = (falseCount / totalDates) * 100;

  if(truePercentage <= 30) {
    return falsePercentage
  }

  return truePercentage
}