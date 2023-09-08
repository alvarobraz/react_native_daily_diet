import { TextInput } from "react-native";
import styled from "styled-components/native";

export type TypeInput = 'TEXT' | 'TEXTAREA';

type Props = {
  type: TypeInput;
}

export const Container = styled(TextInput)<Props>`
  height: ${({ theme, type }) => type === 'TEXT' ? '48px' : '120px'};
  width: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;