import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Diet } from '@screens/Diet';
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
    </Navigator>
  );
}