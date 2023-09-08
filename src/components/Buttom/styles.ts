import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border: 1px solid ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_2};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px
`;

export const Title = styled.Text<Props>`
  width: auto;
  align-items: center;
  align-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;