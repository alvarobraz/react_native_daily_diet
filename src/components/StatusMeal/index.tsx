
import { Status, StatusTypeStyleProps } from './styles';

type Props = {
  type?: boolean
}

export function StatusMeal({ type = true }: Props) {
  return(
    <Status
      type={type}
    />
  );
}