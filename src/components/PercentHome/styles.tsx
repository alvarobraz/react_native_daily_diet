import styled from 'styled-components/native';
import { ArrowUpRight } from "phosphor-react-native/";

export const Container = styled.View`
  flex-direction: column;
  width: 86%;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
  justify-content: center;
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

export const BoxPercentNumber = styled.View`
  width: 95%;
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