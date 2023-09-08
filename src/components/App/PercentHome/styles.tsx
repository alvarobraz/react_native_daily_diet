import styled from 'styled-components/native';
import { ArrowUpRight } from "phosphor-react-native/";

export type WidthBox = 1 | 2 | 3;


type Props = {
  type: WidthBox;
  status?: boolean
}

export const Container = styled.View<Props>`
  flex-direction: column;
  width: ${({ type }) => type === 1 ? '100%' : '127px'};
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme, status }) => status === false ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: ${({ type }) => type === 2 ? '0px' : '0px'};
  margin-right: ${({ type }) => type === 2 ? '0px' : '0px'};
`;

export const AccessButton = styled.TouchableOpacity`
  width: 95%;
  justify-content: flex-start; 
  align-items: flex-end;
`;

export const AccessIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``;

export const BoxPercentNumber = styled.View<Props>`
  width: ${({ type }) => type === 1 ? '86%' : '100%'};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;