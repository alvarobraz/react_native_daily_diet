export type MealStorageDTO = {
  name: string;
  description: string;
  date: string;
  time: string;
  isInsideTheDiet: boolean;
}

export type MealsSectionDTO = {
  title: string;
  data: MealStorageDTO[];
}