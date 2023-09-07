import styled from "styled-components/native";

export type StatusTypeStyleProps = true | false | string;

type Props = {
  type: StatusTypeStyleProps;
}

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  margin-right: 10px;
  margin-top: 5px
`;