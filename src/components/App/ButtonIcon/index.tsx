import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  typeIcon?: ButtonIconTypeStyleProps
  size?:number;
}

export function ButtonIcon({ icon, typeIcon = 'PRIMARY', size = 24, ...rest }: Props) {
  return(
    <Container {...rest}>
      <Icon 
      name={icon}
      type={typeIcon}
      size={size}
      />
    </Container>
  );
}