import {
  Box,
  Center,
  Container,
  Text,
  HStack,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';
import Cupcake from '../Assets/Cupcake';
import Mushroom from '../Assets/Mushroom';
import BorderSVG2 from '../Assets/BorderSVG2.svg';
import Data from './Data.json';
import RainbowNFT from '../Assets/RainbowNFT';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);
const MotionContainer = motion(Container);

const Plan = ({ scrollRef }) => {
  const parallax = useParallax({
    speed: 4,
  });
  const parallax2 = useParallax({
    speed: 6,
  });
  const parallax3 = useParallax({
    speed: 8,
  });

  return (
    <MotionContainer
      ref={scrollRef}
      bg='#E9DDE9'
      maxW='full'
      p='0'
      pt={{ base: '6rem', md: '10rem' }}
      h='fit-content'
    >
      <Container
        // maxH={{ base: '65rem', sm: '40rem', md: '52rem' }}
        zIndex={'4'}
        maxW='full'
        p='0'
        m='0'
      >
        <Container zIndex={'2'} maxW='full' p='0'>
          <HStack justifyContent={'space-evenly'}>
            <Box ref={parallax.ref} w={{ base: '2rem', md: '4rem' }} mb='8rem'>
              <Cupcake />
            </Box>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontFamily={'Fredoka One'}
            >
              BLOOM PLAN
            </Text>
            <Box ref={parallax2.ref} w={{ base: '3rem', md: '4rem' }}>
              <Mushroom />
            </Box>
          </HStack>
          <Text
            maxW='5xl'
            textAlign={'center'}
            mx='auto'
            fontSize={{ base: 'md', md: '2xl' }}
            px='1rem'
          >
            As visionaries, we aspire to open new paths for our holders.
            However, our primary focus at Bloom Buddies will be to establish and
            grow the brand in different stages and to create a valuable
            community to support as we move ahead in this journey.
          </Text>
        </Container>
        <Container ref={parallax3.ref} p='2rem' maxW='5xl'>
          {Data.map((item, key) => (
            <Container
              mx='auto'
              p='2rem'
              rounded='3xl'
              my='2rem'
              maxW='4xl'
              key={key}
              bg='white'
              color='black'
              textAlign={'start'}
            >
              {item.section1?.map((section, key) => (
                <Stack direction={{ base: 'column', md: 'row' }} my='1rem'>
                  <Box
                    textAlign={'start'}
                    boxShadow={{
                      base: 'inset 3px 0px 0px 0px #000',
                      md: 'inset 4px 0px 0px 0px #000',
                    }}
                    w='fit-content'
                    as='button'
                    display='flex'
                    alignItems={'center'}
                    justifyContent='start'
                    bg={'white'}
                    borderBottom={{
                      base: '3px solid #000',
                      md: '4px solid #000',
                    }}
                    rounded={{ base: 'lg', md: '2xl' }}
                  >
                    <Box
                      transform={'translateY(-0.4rem)'}
                      minW='12rem'
                      mt='auto'
                      fontFamily={'Fredoka One'}
                      bg='#EDED13'
                      border={{
                        base: '3px solid black',
                        md: '4px solid black',
                      }}
                      rounded={{ base: 'lg', md: '2xl' }}
                      p={{ base: '0.2rem 0.8rem', md: '0.5rem 0.8rem' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {section.title}
                    </Box>
                  </Box>
                  <Text px='2rem' minW='18rem'>
                    {section.text}
                  </Text>
                </Stack>
              ))}
              {item.section2?.map((section, key) => (
                <Stack direction={{ base: 'column', md: 'row' }} my='1rem'>
                  <Box
                    w='fit-content'
                    h='fit-content'
                    textAlign={'start'}
                    boxShadow={{
                      base: 'inset 3px 0px 0px 0px #000',
                      md: 'inset 4px 0px 0px 0px #000',
                    }}
                    as='button'
                    display='flex'
                    alignItems={'center'}
                    justifyContent='start'
                    bg={'white'}
                    borderBottom={{
                      base: '3px solid #000',
                      md: '4px solid #000',
                    }}
                    rounded={{ base: 'lg', md: '2xl' }}
                  >
                    <Box
                      transform={'translateY(-0.4rem)'}
                      minW='12rem'
                      maxW='16rem'
                      mt='auto'
                      fontFamily={'Fredoka One'}
                      bg='#EDBD13'
                      border={{
                        base: '3px solid black',
                        md: '4px solid black',
                      }}
                      rounded={{ base: 'lg', md: '2xl' }}
                      p={{ base: '0.2rem 0.8rem', md: '0.5rem 0.8rem' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {section.title}
                    </Box>
                  </Box>
                  <Text px='2rem' minW='18rem'>
                    {section.text}
                  </Text>
                </Stack>
              ))}
              {item.section3?.map((section, key) => (
                <Stack direction={{ base: 'column', md: 'row' }} my='1rem'>
                  <Box
                    w='fit-content'
                    h='fit-content'
                    textAlign={'start'}
                    boxShadow={{
                      base: 'inset 3px 0px 0px 0px #000',
                      md: 'inset 4px 0px 0px 0px #000',
                    }}
                    as='button'
                    display='flex'
                    alignItems={'center'}
                    justifyContent='start'
                    bg={'white'}
                    borderBottom={{
                      base: '3px solid #000',
                      md: '4px solid #000',
                    }}
                    rounded={{ base: 'lg', md: '2xl' }}
                  >
                    <Box
                      transform={'translateY(-0.4rem)'}
                      minW='12rem'
                      maxW='16rem'
                      mt='auto'
                      fontFamily={'Fredoka One'}
                      bg='#13ED6A'
                      border={{
                        base: '3px solid black',
                        md: '4px solid black',
                      }}
                      rounded={{ base: 'lg', md: '2xl' }}
                      p={{ base: '0.2rem 0.8rem', md: '0.5rem 0.8rem' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {section.title}
                    </Box>
                  </Box>
                  <Text px='2rem' minW='18rem'>
                    {section.text}
                  </Text>
                </Stack>
              ))}
            </Container>
          ))}
        </Container>
        <Container>
          <Box
            zIndex={'0'}
            w={{ base: '10rem', md: '16rem', lg: '20rem' }}
            mx='auto'
          >
            <RainbowNFT />
          </Box>
        </Container>
      </Container>
    </MotionContainer>
  );
};

export default Plan;
