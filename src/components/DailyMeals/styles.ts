import styled from 'styled-components/native';

type ContainerProps = {
	pressed: boolean
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: left;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
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

// export const BoxInfoMeal = styled.View`
//   width: auto;
//   height: 49px;
//   border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
//   border-radius: 6px;
//   flex-direction: row;
//   justify-content: space-between;
//   text-align: center;
//   align-content: center;
  
// `;

// export const Hour = styled.Text`
//   width: 22%;
//   font-size: ${({ theme }) => theme.FONT_SIZE.XM}px;
//   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
//   color: ${({ theme }) => theme.COLORS.GRAY_1};
//   padding-top: 15px;
//   padding-left: 10px
// `;

// /* Separator */
// export const Separator = styled.View`
//   border-left-width: 1px;
//   border-left-color: ${({ theme }) => theme.COLORS.GRAY_5};
//   margin-top: 13px;
//   margin-bottom: 13px;
// `;


// export const Info = styled.View`
//   width: 78%;
//   height: 50%;

//   flex-direction: row;
//   justify-content: space-between;
//   text-align: center;
//   align-content: center;

//   padding-left: 10px;
//   padding-top: 1px;
//   margin-top: 10px;
//   margin-bottom: 1px;
// `;

// export const TitleInfo = styled.Text`
//   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
//   font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
//   color: ${({ theme }) => theme.COLORS.GRAY_2};

//   align-content: center;
//   justify-content: center;
  
// `;

