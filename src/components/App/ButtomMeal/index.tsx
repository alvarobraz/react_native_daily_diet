import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ButtonIcon } from "@components/App/ButtonIcon";
import { ButtonIconTypeStyleProps } from "../ButtonIcon/styles";

type Props = TouchableOpacityProps & {
  title: string;
  radioClicked: string;
  onPress: () => void;
  typeIcon?: ButtonIconTypeStyleProps
}

export function ButtomMeal({ title, typeIcon, radioClicked, onPress, ...rest }: Props) {

  return (
    <Container typeIcon={typeIcon} radioClicked={radioClicked} onPress={onPress} {...rest}>
      <ButtonIcon
        icon="circle"
        size={8}
        typeIcon={typeIcon}
      />
      <Title>
       {title}
      </Title>
    </Container>
  )
}