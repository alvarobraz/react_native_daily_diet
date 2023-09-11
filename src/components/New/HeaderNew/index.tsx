import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BackGroundTypeStyleProps, BoxPercentNumber, Container, Title } from './styles';



type Props = TouchableOpacityProps & {
  name: string;
  handleNew?: () => void;
  type?: BackGroundTypeStyleProps;
}

export function HeaderNew({ name, type='PRIMARY', handleNew, ...rest }: Props) {
  return (
    <Container type={type}>
      <AccessButton {...rest}
      onPress={handleNew}
      >
        <AccessIcon />
      </AccessButton>
      <BoxPercentNumber>
          <Title>
            {name}
          </Title>
      </BoxPercentNumber>
    </Container>
  );
}