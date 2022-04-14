import React, { useRef } from 'react';
import Buddies from './Buddies/Buddies';
import Faq from './FAQ/FAQ';
import Hero from './Hero/Hero';
import Plan from './Plans/Plan';
import Team from './Team/Team';
import BorderSVG from './Assets/BorderSVG.svg';
import BorderSVG3 from './Assets/BorderSVG3.svg';
import BorderSVG4 from './Assets/BorderSVG4.svg';
import { Center, Container, Image } from '@chakra-ui/react';
import Logo from './Assets/Logo';

const Layout = () => {
  const aboutUsRef = useRef();
  const planRef = useRef();
  const faqRef = useRef();
  const teamRef = useRef();

  return (
    <>
      <Hero aboutUsRef={aboutUsRef} planRef={planRef} faqRef={faqRef} teamRef={teamRef} />
      <Buddies scrollRef={aboutUsRef} />
      <Container maxW='full' p='0' m='0' bg='#E9DDE9'>
        <Center overflow={'hidden'} transform='translateY(-2px)'>
          <Image w='100vw' minW='50rem' src={BorderSVG} />
        </Center>
      </Container>
      <Plan scrollRef={planRef} />
      <Faq scrollRef={faqRef} />
      <Container maxW='full' p='0' m='0' bg='#E8CAF0'>
        <Center overflow={'hidden'} transform='translateY(-2px)'>
          <Image w='100vw' minW='50rem' src={BorderSVG4} />
        </Center>
      </Container>
      <Team scrollRef={teamRef} />
      <Container maxW='full' p='0' m='0'>
        <Center overflow={'hidden'} transform='translateY(-2px)'>
          <Image w='100vw' minW='50rem' src={BorderSVG3} />
        </Center>
      </Container>
      <Container maxW='full' p='0' m='0'>
        <Center
          w={{ base: '7rem', md: '10rem' }}
          py={{ base: '1rem', md: '2rem' }}
          mx='auto'
        >
          <Logo />
        </Center>
      </Container>
    </>
  );
};

export default Layout;
