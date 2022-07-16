import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <Section id='contact'>
        <SectionTitle>Contact</SectionTitle>
        <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:251922951539">251922951539</LinkItem>
        </LinkColumn><
          LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:eyobmuktar4@gmail.com">eyobmuktar4@gmail.com</LinkItem>
        </LinkColumn>
        </LinkList>
      </Section>
  );
};

export default Footer;
