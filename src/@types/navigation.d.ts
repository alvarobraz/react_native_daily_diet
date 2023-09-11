export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      diet: undefined;
      statistics: {
        statusPercent: number;
        maxSequence:number;
        isInside: number;
        isOutSide: number;
        totalMealsRegister: number
      };
      new: undefined;
      meal: {
        dateTime: string;
      };
    }
  }
}