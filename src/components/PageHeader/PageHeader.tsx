import { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { Logo } from '../Logo/Logo';
import {
  HeaderBlock,
  HeaderContainer,
  HeaderText,
  MinHeaderBlock,
} from './PageHeader.styled';

export function PageHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fullHeight = Number.parseInt(theme.spacing(10), 10) + 30;
  const minimizedHeight = Number.parseInt(theme.spacing(7), 10);

  return (
    <>
      <MinHeaderBlock>
        <HeaderContainer>
          <Logo />
        </HeaderContainer>
      </MinHeaderBlock>
      <HeaderBlock
        height={
          scrollPosition > fullHeight
            ? minimizedHeight
            : fullHeight + minimizedHeight - scrollPosition
        }
      >
        <HeaderContainer>
          <HeaderText>
            TV Show and web series database.{' '}
            <span>
              Create personalized schedules. Episodes guide, cast, crew and
              character information.
            </span>
          </HeaderText>
        </HeaderContainer>
      </HeaderBlock>
    </>
  );
}
