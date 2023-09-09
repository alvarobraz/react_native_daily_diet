import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealCreate(newMeal: string) {
  try {
    await AsyncStorage.setItem(MEAL_COLLECTION, newMeal);
  } catch (error) {
    throw error;
  }
}