import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Diet } from '@screens/Diet';
import { Meal } from '@screens/Meal';
import { New } from '@screens/New';
import { Statistics } from '@screens/Statistics';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="diet"
        component={Diet}
      />

      <Screen 
        name="statistics"
        component={Statistics}
      />

      <Screen 
        name="new"
        component={New}
      />

      <Screen 
        name="meal"
        component={Meal}
      />
    </Navigator>
  );
}