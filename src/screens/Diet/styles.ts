import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
`;