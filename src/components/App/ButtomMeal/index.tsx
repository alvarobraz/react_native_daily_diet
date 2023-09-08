import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { ButtonIcon } from "@components/App/ButtonIcon";
import { ButtonIconTypeStyleProps } from "../ButtonIcon/styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  handleButton?: () => void;
  typeIcon?: ButtonIconTypeStyleProps
}

export function ButtomMeal({ title, type = 'PRIMARY', handleButton, typeIcon, ...rest }: Props) {
  return (
    <Container onPress={handleButton} type={type} {...rest}>
      <ButtonIcon
        icon="circle"
        size={8}
        typeIcon={typeIcon}
      />
      <Title type={type}>
       {title}
      </Title>
    </Container>
  )
}