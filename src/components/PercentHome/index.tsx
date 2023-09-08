import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title, WidthBox } from './styles';

type Props = {
  percent: number;
  name: string;
  icon?: boolean;
  type: WidthBox;
  status?: boolean
}

export function PercentHome({ percent, name, icon, type, status }: Props) {
  return (
    <Container type={type} status={status}>
      {
        icon ?
        <AccessButton>
          <AccessIcon />
        </AccessButton>
        :
        null
      }
      <BoxPercentNumber type={type}>
          <Title>
            {percent}
          </Title>
          <Subtitle>
            {name}
          </Subtitle>
        </BoxPercentNumber>
    </Container>
  );
}