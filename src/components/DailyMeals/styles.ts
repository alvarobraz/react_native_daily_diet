import styled from 'styled-components/native';

export const Container = styled.View`
  width: 86%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: left;
  justify-content: flex-start;
`;

export const DateMeal = styled.Text`
  /* background-color: #333; */
  width: auto;
  padding: 10px 14px 5px 3px;
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;