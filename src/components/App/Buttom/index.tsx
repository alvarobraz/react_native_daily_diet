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
  size?:number;
  icon?: boolean
  name: 'add' | 'circle' | 'border-color' | 'delete-outline'
}

export function Buttom({ title, type = 'PRIMARY', handleButton, size, typeIcon, icon, name, ...rest }: Props) {
  return (
    <Container onPress={handleButton} type={type} {...rest}>
      {
        icon ?? <ButtonIcon
                  icon={name}
                  size={size}
                  typeIcon={typeIcon}
                />

      }
      <Title type={type}>
       {title}
      </Title>
    </Container>
  )
}