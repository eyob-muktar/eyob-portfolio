import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      Hi, My name is
      <SectionTitle main center>
        <Span>Eyob Muktar</Span> <br />
       <p style={{color:'#a8b2d1'}}>
       I am a <Span>Full-Stack</Span> developer
        </p> 
      </SectionTitle>
      <SectionText>
        My purpose is to help you make your dream project become reality.
      </SectionText>
      <Button onClick={() => window.location.assign('#contact')}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;