import { TouchableOpacityProps } from "react-native";
import { AccessButton, AccessIcon, BoxPercentNumber, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  name: string;
  handleNew?: () => void;
}

export function HeaderNew({ name, handleNew, ...rest }: Props) {
  return (
    <Container>
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