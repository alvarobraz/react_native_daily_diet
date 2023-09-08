import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title } from './styles';

type Props = TouchableOpacityProps & {
  percent: number;
  handleDiet: () => void;
}

export function HeaderStatistics({ percent, handleDiet, ...rest }: Props) {
  return (
    <Container>
      <AccessButton {...rest}
      onPress={handleDiet}
      >
        <AccessIcon />
      </AccessButton>
      <BoxPercentNumber>
          <Title>
            {`${percent}%`}
          </Title>
          <Subtitle>
            das refeições dentro da dieta
          </Subtitle>
      </BoxPercentNumber>
    </Container>
  );
}