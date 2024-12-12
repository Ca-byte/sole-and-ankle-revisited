/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';


const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-labelledby='menu-content'>
      <CloseButton onClick={onDismiss}>
        <Icon id="close"/>
        <VisuallyHidden>
          Dismiss menu 
        </VisuallyHidden>
        </CloseButton>
      <Filler />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8 );
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 16px;
  padding: 16px;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const NavLink = styled.a`
 color: ${COLORS.gray[900]};
 font-weight: ${WEIGHTS.medium};
 text-decoration: none;
 font-size: 1.125rem;
 text-transform: uppercase;

 &:first-of-type {
  color:${COLORS.secondary};
 }

`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

`;

const FooterLink = styled.a`
 color: ${COLORS.gray[700]};
 font-weight: ${WEIGHTS.normal};
 text-decoration: none;
 font-size: 0.875rem;
 text-transform: capitalize;

`;

export default MobileMenu;
