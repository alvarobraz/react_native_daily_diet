import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { ButtonIcon } from "@components/App/ButtonIcon";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  handleButton?: () => void;
  size?: number
  icon?: boolean
}

export function Buttom({ title, type = 'PRIMARY', handleButton, size, icon, ...rest }: Props) {
  return (
    <Container onPress={handleButton} type={type} {...rest}>
      {
        icon ?? <ButtonIcon
                  icon="add"
                  size={size}
                />

      }
      <Title type={type}>
       {title}
      </Title>
    </Container>
  )
}