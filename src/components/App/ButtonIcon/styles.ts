import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'QUARTARY'

type Props = {
  type: ButtonIconTypeStyleProps;
  size?: number;
}


export const Container = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type, size }) => ({
  size: size,
  color: type === 'PRIMARY'   ? theme.COLORS.WHITE :
         type === 'SECONDARY' ? theme.COLORS.GRAY_1 : 
         type === 'TERTIARY'  ? theme.COLORS.GREEN_DARK :
                                theme.COLORS.RED_DARK
}))``;