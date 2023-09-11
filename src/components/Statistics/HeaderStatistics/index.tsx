import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title } from './styles';
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  percent: number;
  handleDiet: () => void;
  status?: boolean;
}

export function HeaderStatistics({ percent, handleDiet, status, ...rest }: Props) {

  const { COLORS } = useTheme();

  console.log(status)

  return (
    <Container status={status}>
      <AccessButton {...rest}
      onPress={handleDiet}
      >
        {
            status === true ?
            <AccessIcon 
             color={COLORS.GREEN_DARK} 
            />
            :
            <AccessIcon
              color={COLORS.RED_DARK} 
            />
          }
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