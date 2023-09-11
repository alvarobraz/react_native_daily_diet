import styled from 'styled-components/native';
import { ArrowLeft } from "phosphor-react-native/";

export type BackGroundTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type PropsContainer = {
  type?: BackGroundTypeStyleProps
}

export const Container = styled.View<PropsContainer>`
  flex-direction: row;
  width: 100%;
  height: 104px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const AccessButton = styled.TouchableOpacity`
  /* background-color: #333; */
  width: 20%;
  justify-content: flex-start; 
  align-items: flex-start;
  padding-left: 20px;
`;

export const AccessIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``;

export const BoxPercentNumber = styled.View`
  /* background-color: #ccc; */
  width: 65%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;