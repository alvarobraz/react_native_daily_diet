import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Buttom({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <ButtonIcon
        icon="add" 
      />
      <Title type={type}>
       {title}
      </Title>
    </Container>
  )
}