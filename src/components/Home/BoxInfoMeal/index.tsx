import { StatusMeal } from "@components/Home/StatusMeal";
import { InfoMeal, Hour, Separator, Info, TitleInfo } from "./styles";

type Props = {
	hour: string;
	name: string;
	isInsideTheDiet: boolean;
}

export function BoxInfoMeal({ hour, name, isInsideTheDiet }: Props) {
  return (
    <InfoMeal>
        <Hour>
          {hour}
        </Hour>
        <Separator/>
        <Info>
          <TitleInfo>
            {name}
          </TitleInfo>
          <StatusMeal
            type={isInsideTheDiet}
          />
        </Info>
    </InfoMeal>  
  )
}