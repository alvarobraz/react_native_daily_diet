import { Pressable, PressableProps } from 'react-native';
import { Container } from "./styles";
import { BoxInfoMeal } from "@components/Home/BoxInfoMeal";

type Props = PressableProps & {
	hour: string;
	name: string;
	isInsideTheDiet: boolean;
}

export function DailyMeals({ hour, name, isInsideTheDiet, ...rest } : Props) {
  return (
    <Pressable { ...rest }>
			{({ pressed }) => (
				<Container pressed={ pressed }>
        <BoxInfoMeal
          hour={hour}
          name={name}
          isInsideTheDiet={isInsideTheDiet}
        />
      </Container>  
			)}
		</Pressable>
      
  )
}