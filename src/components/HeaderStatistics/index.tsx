import { AccessButton, AccessIcon, BoxPercentNumber, Container, Subtitle, Title } from './styles';

type Props = {
  percent: number
}

export function HeaderStatistics({ percent }: Props) {
  return (
    <Container>
      <AccessButton>
        <AccessIcon />
      </AccessButton>
      <BoxPercentNumber>
          <Title>
            {`${percent}%`}
          </Title>
          <Subtitle>
            das refeições dentro da dieta
          </Subtitle>
      </BoxPercentNumber>
    </Container>
  );
}