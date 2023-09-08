import styled from 'styled-components/native';

export const Container = styled.View`
  width: auto;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  align-content: center;
  
`;

export const Title = styled.Text`
  padding-top: 20px;
  padding-bottom: 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const BoxStatistics = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

