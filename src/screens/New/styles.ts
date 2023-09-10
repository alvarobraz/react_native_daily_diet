import styled from 'styled-components/native';

type PropsMessage = {
  typeTitle: 'success' | 'fail';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 20px;
`;

export const BoxTopInput = styled.View`
  max-width: 327px;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  width: 100%;
  padding: 0px 23px 2px 0px;
  text-align: left;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.XM}px;
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
  
`;

export const BoxMessageSuccessAndFail = styled.View`
  /* background-color: #333; */
  max-width: 327px;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;
  margin-top: 70px;
`;

export const TitleMessage = styled.Text<PropsMessage>`
  /* background-color: #ccc; */
  width: auto;
  padding: 0px 20px 2px 20px;
  text-align: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ typeTitle, theme }) => typeTitle === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;


export const SubTitleMessage = styled.Text`
  /* background-color: #ccc; */
  width: auto;
  padding: 0px 20px 2px 20px;
  text-align: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const BoxMessageImages = styled.View`
  /* background-color: #333; */
  max-width: 327px;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Images = styled.Image`
  width: 224px;
  height: 288px;
`;
