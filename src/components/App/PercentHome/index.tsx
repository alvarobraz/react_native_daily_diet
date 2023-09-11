import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title, WidthBox } from './styles';
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  percent: number;
  name: string;
  icon?: boolean;
  isHavePercent?: boolean;
  type: WidthBox;
  status?: boolean,
  handleStatistics?: () => void
}

export function PercentHome({ percent, name, icon, isHavePercent, type, status, handleStatistics, ...rest }: Props) {
  
  const { COLORS } = useTheme();

  return (
    <Container type={type} status={status}>
      {
        icon ?
        <AccessButton 
        {...rest}
        onPress={handleStatistics}
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
        :
        null
      }
      <BoxPercentNumber isHavePercent={isHavePercent} type={type}>
          <Title>
          {isHavePercent ? `${percent}%` : percent}
          </Title>
          <Subtitle>
            {name}
          </Subtitle>
        </BoxPercentNumber>
    </Container>
  );
}