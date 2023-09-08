import { Pressable, PressableProps } from 'react-native';
import { Container, DateMeal } from "./styles";
import { BoxInfoMeal } from "@components/Home/BoxInfoMeal";
import { StatusTypeStyleProps } from "@components/Home/StatusMeal/styles";

type Props = PressableProps & {
	hour: string;
	name: string;
	isInsideTheDiet: boolean;
}

export function DailyMeals({ hour, name, isInsideTheDiet } : Props) {
  return (

    <Container>
      <BoxInfoMeal
        hour={hour}
        name={name}
        isInsideTheDiet={isInsideTheDiet}
      />
    </Container>    
  )
}