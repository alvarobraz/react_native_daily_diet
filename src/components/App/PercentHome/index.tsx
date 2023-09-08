import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title, WidthBox } from './styles';

type Props = TouchableOpacityProps & {
  percent: number;
  name: string;
  icon?: boolean;
  type: WidthBox;
  status?: boolean,
  handleStatistics?: () => void
}

export function PercentHome({ percent, name, icon, type, status, handleStatistics, ...rest }: Props) {
  return (
    <Container type={type} status={status}>
      {
        icon ?
        <AccessButton 
        {...rest}
        onPress={handleStatistics}
        >
          <AccessIcon />
        </AccessButton>
        :
        null
      }
      <BoxPercentNumber type={type}>
          <Title>
            {percent}
          </Title>
          <Subtitle>
            {name}
          </Subtitle>
        </BoxPercentNumber>
    </Container>
  );
}