import { Buttom } from '@components/Buttom';
import { Container, Title } from './styles';
import { HeaderHome } from '@components/HeaderHome';
import { PercentHome } from '@components/PercentHome';
import { DailyMeals } from '@components/DailyMeals';

export function Diet() {

  const percent = 90.86

  return (
    <Container>
     <HeaderHome />
     <PercentHome
      percent={percent}
    />
    <Title>
      Refeições
    </Title>
    <Buttom
      title='Nova Refeição'
    />
    <DailyMeals/>
    </Container>
  );
}