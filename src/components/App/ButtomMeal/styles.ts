import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ButtonIconTypeStyleProps } from '../ButtonIcon/styles';

type Props = {
  typeIcon?: ButtonIconTypeStyleProps
  radioClicked: string; 
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border: 1px solid ${({ theme, radioClicked, typeIcon }) => 
    radioClicked === 'TERTIARY' && typeIcon === 'TERTIARY' ? theme.COLORS.GRAY_2 : 
    radioClicked === 'QUARTARY' && typeIcon === 'QUARTARY' ? theme.COLORS.GRAY_2 : 
    theme.COLORS.WHITE};
  border-radius: 6px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  padding-left: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  right: 10px;
`;

