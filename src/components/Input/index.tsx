import { TextInput, TextInputProps } from "react-native";
import { Container, TypeInput } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  type?: TypeInput;
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ type = 'TEXT', inputRef, ...rest }: Props) {

  const { COLORS } = useTheme();

  return (
    <Container
      type={type}
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_4}
      {...rest} 
    />
  )
}