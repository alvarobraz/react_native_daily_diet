import { StatusTypeStyleProps } from "@components/StatusMeal/styles";
import { Pressable, PressableProps } from 'react-native';
import { Container, DateMeal } from "./styles";
import { BoxInfoMeal } from "@components/BoxInfoMeal";

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