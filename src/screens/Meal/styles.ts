import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: left;
  justify-content: flex-start ;
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  /* background-color: #ccc; */
  width: auto;
  padding: 0px 20px 2px 20px;
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;


export const SubTitle = styled.Text`
  /* background-color: #ccc; */
  width: auto;
  padding: 0px 20px 2px 20px;
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 20px;
`;

export const StatusMeal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  width: 175px;
  height: 34px;

  margin-left: 20px;
  padding-left: 7px;
  padding-right: 7px;

  border-radius: 999px;
`

export const TitleStatus = styled.Text`
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  right: 10px;
`;

export const BoxButtons = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  margin-left: 20px;
  margin-right: 20px;
  
`

export const ModalContainer = styled.View`
  flex: 1;
  /* height: 100%; */
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalContent = styled.View`
  /* flex: 1; */

  justify-content: center;
  align-items: center;
  align-content: center;  
  height: 192px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  border-radius: 8px;
`;

export const ModalText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 10px;;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;