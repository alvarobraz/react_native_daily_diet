import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BoxTopInput = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  width: 100%;
  padding: 0px 23px 2px 0px;
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;


export const BoxHalfInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
`;

export const HalfInput = styled.View`
  width: 50%;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  /* padding-left: 20px; */
  padding-right: 20px;
`;

export const BoxButtom= styled.View`
  width: 100%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;



