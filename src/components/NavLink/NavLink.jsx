import React from 'react';
import styled from 'styled-components';
import { QUERIES, WEIGHTS } from '../../constants';

const NavLink = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /* text sliding effect */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 200ms;
  transform: translateY(var(--translate-from));

  @media (hover: hover) and ${QUERIES.enableAnimations} {
  ${Wrapper}:hover & {
    transform: translateY(var(--translate-to));
  }
}
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  wieght: 100%;
  font-weight: ${WEIGHTS.bold};
  --translate-from: 100%;
  --translate-to: 0%;
`;

export default NavLink;
