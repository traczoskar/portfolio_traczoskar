import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const MobileNavLinks = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 2.5rem;
  font-weight: 400;
  font-size: 1.5rem;
  gap: 2rem;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.app.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

export const MobileRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  padding: 1rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.basic};
  }

  &:visited {
    color: inherit;
  }
`;

export const MobileHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  padding: 1rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.basic};
  }

  &:visited {
    color: inherit;
  }
`;

const animatespin3d = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg) translateY(-5px);
  }
  100% {
    transform: rotateY(0deg) translateY(0px);
  }
`;

export const MobileIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  color: inherit;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    svg {
      color: ${({ theme }) => theme.colors.basic};
      animation: ${animatespin3d} 0.8s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &:visited {
    color: inherit;
  }

  svg {
    transition: 0.3s;
    width: 100%;
    height: 100%;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 4rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
