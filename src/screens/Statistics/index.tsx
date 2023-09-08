import { ScrollView } from "react-native";
import { HeaderStatistics } from "@components/HeaderStatistics";
import { BoxStatistics, Container, Title } from "./styles";
import { PercentHome } from "@components/PercentHome";

export function Statistics() {

  const percent = 90.86
  const bestDish = "melhor sequência de pratos dentro da dieta"
  const registeredMeals = "refeições registradas"

  return (
    <Container>
      <HeaderStatistics
      percent={percent}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>
          Estatísticas gerais
        </Title>
        <PercentHome
          type={1}
          percent={percent}
          name={bestDish}
        />
        <PercentHome
          type={1}
          percent={percent}
          name={registeredMeals}
        />
        <BoxStatistics>
          <PercentHome
            type={2}
            percent={percent}
            name={registeredMeals}
          />
          <PercentHome
            type={3}
            percent={percent}
            name={registeredMeals}
            status={false}
          />
        </BoxStatistics>
      </ScrollView>
    </Container>
  )

}