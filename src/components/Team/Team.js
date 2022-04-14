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
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import NFTImage1 from '../Assets/Images/NFTImage1.webp';
import NFTImage2 from '../Assets/Images/NFTImage2.webp';
import NFTImage3 from '../Assets/Images/NFTImage3.webp';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);
const MotionContainer = motion(Container);

const Team = ({ scrollRef }) => {
  //   const parallax = useParallax({
  //     speed: 4,
  //   });
  //   const parallax2 = useParallax({
  //     speed: 6,
  //   });
  //   const parallax3 = useParallax({
  //     speed: 8,
  //   });

  return (
    <MotionContainer
      ref={scrollRef}
      bg='#E8CAF0'
      maxW='full'
      p='0'
      py={{ base: '6rem', md: '10rem' }}
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
          <Text
            pb='2rem'
            w='fit-content'
            mx='auto'
            testAlign='center'
            fontSize={{ base: '3xl', md: '5xl' }}
            fontFamily={'Fredoka One'}
          >
            TEAM
          </Text>
          <Text
            maxW='5xl'
            textAlign={'center'}
            mx='auto'
            fontSize={{ base: 'md', md: '2xl' }}
            px='1rem'
          >
            Bloom Buddies is run by a team of professionals from the
            advertisement, toy manufacturing, and storytelling Industry with a
            total of 10+ years of experience and expertise.
          </Text>
        </Container>
        <Container maxW='6xl' p='2rem'>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            mx='auto'
            w='fit-content'
            spacing='2rem'
          >
            <VStack
              justify={'space-between'}
              bg='white'
              color='black'
              rounded='2xl'
              p='1rem'
            >
              <Center rounded='2xl' p='1rem'>
                <Box bg='black' rounded='2xl'>
                  <Image
                    transform={'translate(-0.5rem, -0.5rem)'}
                    src={NFTImage1}
                    w={'15rem'}
                    rounded='2xl'
                    border='4px solid black'
                  />
                </Box>
              </Center>
              <Text
                fontSize={{ base: '3xl', lg: '4xl' }}
                fontFamily={'Fredoka One'}
              >
                DEEPAK
              </Text>
              <Text
                pb='0.5rem'
                maxW='14rem'
                textAlign={'center'}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Founder/ Artist/ Creative Director
              </Text>
              <HStack spacing='2rem'>
                <BsTwitter size={28} />
                <BsInstagram size={28} />
              </HStack>
            </VStack>
            <VStack
              justify={'space-between'}
              bg='white'
              color='black'
              rounded='2xl'
              p='1rem'
            >
              <Center rounded='2xl' p='1rem'>
                <Box bg='black' rounded='2xl'>
                  <Image
                    transform={'translate(-0.5rem, -0.5rem)'}
                    src={NFTImage2}
                    w={'15rem'}
                    rounded='2xl'
                    border='4px solid black'
                  />
                </Box>
              </Center>
              <Text
                fontSize={{ base: '3xl', lg: '4xl' }}
                fontFamily={'Fredoka One'}
              >
                VYSHAK
              </Text>
              <Text
                pb='0.5rem'
                maxW='14rem'
                textAlign={'center'}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Board Game Designer/ Story Teller
              </Text>
              <HStack spacing='2rem'>
                <BsTwitter size={28} />
                <BsInstagram size={28} />
              </HStack>
            </VStack>
            <VStack
              justify={'space-between'}
              bg='white'
              color='black'
              rounded='2xl'
              p='1rem'
            >
              <Center rounded='2xl' p='1rem'>
                <Box bg='black' rounded='2xl'>
                  <Image
                    transform={'translate(-0.5rem, -0.5rem)'}
                    src={NFTImage3}
                    w={'15rem'}
                    rounded='2xl'
                    border='4px solid black'
                  />
                </Box>
              </Center>
              <Text
                fontSize={{ base: '3xl', lg: '4xl' }}
                fontFamily={'Fredoka One'}
              >
                TANISHK
              </Text>
              <Text
                pb='0.5rem'
                maxW='14rem'
                textAlign={'center'}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Tech Development
              </Text>
              <HStack spacing='2rem'>
                <BsTwitter size={28} />
                <BsInstagram size={28} />
              </HStack>
            </VStack>
          </Stack>
        </Container>
      </Container>
    </MotionContainer>
  );
};

export default Team;
