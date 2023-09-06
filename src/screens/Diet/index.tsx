import { HeaderHome } from '@components/HeaderHome';
import { Container } from './styles';
import { PercentHome } from '@components/PercentHome';

export function Diet() {

  const percent = 90.86

  return (
    <Container>
     <HeaderHome />
     <PercentHome
      percent={percent}
    />
    </Container>
  );
}