import styled from 'styled-components/native';

type ContainerProps = {
	pressed: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 99%;
  background-color: ${({ theme, pressed }) => pressed ? theme.COLORS.GRAY_300 : 'transparent' };
  border: 1px solid ${({ theme, pressed }) => pressed ? theme.COLORS.GRAY_300 : 'transparent' };
  border-radius: 6px;
  text-align: left;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
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
