import { Container, Logo, Avatar } from "./styles";

import logoImg from '@assets/logo_daily_diet.png';
import avatarImg from '@assets/avatar.png';

export function HeaderHome() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar source={avatarImg} />
    </Container>
  )
}