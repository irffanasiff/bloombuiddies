import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Cloud from '../Assets/Cloud';
import BloomBuddies from '../Assets/BloomBuddies';
import Logo from '../Assets/Logo';
import Separator from '../Assets/Separator.js';
import HeroSVG from '../Assets/hero.svg';
import { motion } from 'framer-motion';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useParallax } from 'react-scroll-parallax';
import { BsTwitter } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);
const MotionContainer = motion(Container);

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};
const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};

const Hero = ({ aboutUsRef, planRef, faqRef, teamRef }) => {
  const [animation, setAnimation] = useState('closed');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const parallax = useParallax({
    speed: -40,
  });

  const onClick = () => {
    setAnimation('moving');
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed');
    }, 200);
    console.log('here');
    isOpen ? onClose() : onOpen();
  };

  const scrollToDiv = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    onClick();
  };

  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        type: 'spring',
        stiffness: 120,
        damping: 6,
      }}
      maxW='full'
      p='0'
      m='0'
      bgColor='#B9EFE8'
      h={{ base: '70vh', md: '100vh' }}
    >
      <Container
        maxH='90rem'
        zIndex={'2'}
        position='absolute'
        top={'0'}
        maxW='full'
        p='0'
        m='0'
        h={{ base: '85vh', md: '130vh' }}
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
      >
        <VStack w='full' h='full' justifyContent={'space-between'}>
          {/* Navbar */}
          <Container
            pt='1.5rem'
            display={{ base: 'flex', md: 'none' }}
            flexDir='column'
            alignItems='center'
            justifyContent={'space-between'}
          >
            <Container
              display='flex'
              flexDir={'row'}
              alignItems='center'
              justifyContent={'space-between'}
            >
              <Center w='fit-content'>
                <button onClick={onClick}>
                  <svg width='24' height='24' viewBox='0 0 24 24'>
                    <motion.path
                      stroke='#000'
                      stroke-width='4'
                      animate={animation}
                      variants={path01Variants}
                    />
                    <motion.path
                      stroke='#000'
                      stroke-width='4'
                      animate={animation}
                      variants={path02Variants}
                    />
                  </svg>
                </button>
              </Center>
              <Center w='2rem'>
                <Logo />
              </Center>
            </Container>
            {isOpen ? (
              <Box
                mb='auto'
                fontFamily='Archivo'
                w='full'
                display={{ md: 'none' }}
              >
                <VStack
                  alignItems={'start'}
                  as={'nav'}
                  fontSize='xl'
                  fontWeight='600'
                  w='full'
                  p={{ base: '1rem', md: '3rem' }}
                >
                  <Box as='button' onClick={() => scrollToDiv(aboutUsRef)}>
                    About
                  </Box>
                  <Box as='button' onClick={() => scrollToDiv(planRef)}>
                    Roadmap
                  </Box>
                  <Box as='button' onClick={() => scrollToDiv(faqRef)}>
                    Faq
                  </Box>
                  <Box as='button' onClick={() => scrollToDiv(teamRef)}>
                    Team
                  </Box>
                </VStack>
              </Box>
            ) : null}
          </Container>

          <Container
            display={{ base: 'none', md: 'flex' }}
            pt='2rem'
            maxW='8xl'
            fontFamily='Archivo'
            alignItems='center'
            justifyContent={'space-between'}
            w='full'
          >
            <Center w='4rem'>
              <Logo />
            </Center>
            <HStack fontSize='xl' fontWeight='600'>
              <Box
                as='button'
                onClick={() => scrollToDiv(aboutUsRef)}
                px='0.8rem'
              >
                About
              </Box>
              <Separator />
              <Box as='button' onClick={() => scrollToDiv(planRef)} px='0.8rem'>
                Roadmap
              </Box>
              <Separator />
              <Box as='button' onClick={() => scrollToDiv(faqRef)} px='0.8rem'>
                Faq
              </Box>
              <Separator />
              <Box as='button' onClick={() => scrollToDiv(teamRef)} px='0.8rem'>
                Team
              </Box>
            </HStack>
            <HStack spacing='2rem'>
              <BsTwitter size={32} />
              <FaDiscord size={34} />
            </HStack>
          </Container>
          {/* Hero */}
          <MotionCenter
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: 'spring',
              stiffness: 120,
              damping: 6,
            }}
            w={{ base: '15rem', md: '20rem', xl: '30rem' }}
          >
            <BloomBuddies />
          </MotionCenter>
          <Container
            maxW='full'
            overflow='hidden'
            display='flex'
            alignItems={'center'}
            justifyContent='center'
            p='0'
          >
            <MotionBox
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.5,
                type: 'spring',
                stiffness: 200,
                damping: 6,
              }}
              h='full'
            >
              <Image
                objectFit={'cover'}
                objectPosition='center'
                src={HeroSVG}
                w='100vw'
                h={{ base: '22rem', md: '40rem', lg: '85vh' }}
              />
            </MotionBox>
            <Center
              alignSelf={'end'}
              pb={{ base: '4.5rem', md: '8.3rem', lg: '12rem' }}
              position={'absolute'}
              w='full'
            >
              <MotionBox
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.8,
                  type: 'spring',
                  stiffness: 150,
                  damping: 5,
                }}
                as='button'
                borderBottom={{ base: '4px solid #fff', md: '8px solid #fff' }}
                rounded={{ base: 'lg', md: '2xl' }}
              >
                <Box
                  mt='auto'
                  fontFamily={'Fredoka One'}
                  bg='#EDED13'
                  border={{ base: '3px solid black', md: '4px solid black' }}
                  rounded={{ base: 'lg', md: '2xl' }}
                  p={{ base: '0.5rem 1.2rem', md: '1rem 2rem' }}
                  fontSize={{ base: 'sm', md: '3xl' }}
                >
                  MINTING SOON
                </Box>
              </MotionBox>
            </Center>
          </Container>
        </VStack>
      </Container>
      <Container
        zIndex={'0'}
        ref={parallax.ref}
        overflow='hidden'
        display='flex'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        maxW='full'
        p='0'
        m='0'
        mb='auto'
        pb={{ base: '20rem', md: '2rem', lg: '12rem' }}
        pt={{ base: '0', md: '1rem' }}
      >
        <VStack
          w='full'
          minW={'1200px'}
          spacing={{ base: '0rem', md: '2rem', xl: '-8' }}
        >
          <Cloud justify='end' />
          <Cloud ps='20rem' />
          <Cloud justify={'end'} pe='22rem' />
          <Cloud />
        </VStack>
      </Container>
    </MotionContainer>
  );
};

export default Hero;
