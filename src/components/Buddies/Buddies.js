import {
  Box,
  Center,
  Container,
  Flex,
  Text,
  HStack,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import CherrySVG from '../Assets/CherrySVG';
import PizzaSVG from '../Assets/PizzaSVG';
import BuddiesImages from './BuddiesImages';
import { useParallax } from 'react-scroll-parallax';
import LeaveSVG from '../Assets/LeaveSVG';
import BorderSVG from '../Assets/BorderSVG.svg';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);
const MotionContainer = motion(Container);

const Buddies = ({ scrollRef }) => {
  const parallax = useParallax({
    speed: 4,
  });
  const parallax2 = useParallax({
    speed: 6,
  });
  const parallax3 = useParallax({
    speed: 15,
  });
  // const parallax4 = useParallax({
  //   speed: 12,
  // });

  return (
    <MotionContainer
      ref={scrollRef}
      bg='#FCF0FC'
      maxW='full'
      p='0'
      pt={{ base: '15rem', md: '25rem', xl: '30rem' }}
      maxH='90rem'
    >
      <Container
        maxH={{ base: '65rem', sm: '40rem', md: '52rem' }}
        zIndex={'4'}
        maxW='full'
        p='0'
        m='0'
      >
        <Container zIndex={'2'} maxW='full' p='0'>
          <HStack justifyContent={'space-evenly'}>
            <Box ref={parallax.ref} w={{ base: '3rem', md: '4rem' }} mb='5rem'>
              <CherrySVG />
            </Box>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontFamily={'Fredoka One'}
            >
              HI! BUDDIES
            </Text>
            <Box ref={parallax2.ref} w={{ base: '3rem', md: '4rem' }} mt='8rem'>
              <PizzaSVG />
            </Box>
          </HStack>
          <Text
            maxW='5xl'
            textAlign={'center'}
            mx='auto'
            fontSize={{ base: 'md', md: '2xl' }}
            px='1rem'
          >
            Bloom Buddies is a collection of charmingly generated 8888 buddies,
            to spread love and happiness by self-motivated artist and Founder
            Deepak(DK). Our goal is to become a platform and wholesome brand for
            the younger generation both online and offline, with a positive
            approach.As Bloom Buddies, we believe in a unified/inclusive
            tomorrow, through the power of storytelling, varied communities, and
            art.
          </Text>
        </Container>
        <Container
          zIndex={'2'}
          ref={parallax3.ref}
          overflow='hidden'
          display='flex'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          maxW='full'
          p='0'
          m='0'
          pb={{ base: '2rem', md: '2rem', lg: '0rem' }}
          pt='1rem'
        >
          <BuddiesImages />
        </Container>
      </Container>
      {/*  <Container
        mt={{ base: '15rem', md: '25rem' }}
        zIndex='0'
        maxW='full'
        width='100%'
        h='50vh'
        overflow={'hidden'}
        top='50%'
        position={'absolute'}
        display={{ base: 'none', xl: 'block' }}
      >
        <LeaveSVG
          parallax={parallax4}
          transform={`translate(100rem, -10rem)`}
        />
        <LeaveSVG parallax={parallax4} transform={`translateX(10vw)`} />
        <LeaveSVG parallax={parallax4} transform={`translateX(90vw)`} />
        <LeaveSVG parallax={parallax4} transform={`translateX(80vw)`} />
        <LeaveSVG parallax={parallax4} transform={`translateX(16vw)`} />
        <LeaveSVG parallax={parallax4} transform={`translateX(88vw)`} />
  </Container>*/}
    </MotionContainer>
  );
};

export default Buddies;
