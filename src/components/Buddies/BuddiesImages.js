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
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image1 from '../Assets/Images/NFTImage1.webp';
import Image2 from '../Assets/Images/NFTImage2.webp';
import Image3 from '../Assets/Images/NFTImage3.webp';
import Image4 from '../Assets/Images/NFTImage4.webp';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const variant1 = {
  hidden: { opacity: 0, y: 100, x: 30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: 'spring',
      stiffness: 120,
      damping: 6,
    },
  },
};

const variant2 = {
  hidden: { opacity: 0, y: 80, x: 20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
      type: 'spring',
      stiffness: 100,
      damping: 4,
    },
  },
};
const variant3 = {
  hidden: { opacity: 0, y: 80, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 1,
      type: 'spring',
      stiffness: 100,
      damping: 6,
    },
  },
};
const variant4 = {
  hidden: { opacity: 0, y: 100, x: -30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 0.5,
      type: 'spring',
      stiffness: 130,
      damping: 10,
    },
  },
};

const BuddiesImages = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Stack
      ref={ref}
      direction={{ base: 'column', sm: 'row' }}
      alignItems={'center'}
      justifyContent='center'
      py={{ base: '2rem', md: '4rem' }}
      px={{ base: '2.5rem', sm: '1rem', md: '0.5rem' }}
      spacing={{ base: '-2rem', sm: '-3rem', md: '4rem' }}
      w={{ base: 'full', md: 'auto' }}
    >
      <MotionBox
        initial='hidden'
        animate={controls}
        variants={variant1}
        w='full'
      >
        <Image
          mb={{ base: '0rem', md: '6rem' }}
          mr={{ base: 'auto', sm: '0' }}
          border={{ base: '2px solid black', md: '4px solid black' }}
          rounded={{ base: 'md', md: 'xl' }}
          w='10rem'
          src={Image1}
        />
      </MotionBox>
      <MotionBox
        initial='hidden'
        animate={controls}
        variants={variant2}
        w='full'
      >
        <Image
          ml={{ base: 'auto', sm: '0' }}
          border={{ base: '2px solid black', md: '4px solid black' }}
          rounded={{ base: 'md', md: 'xl' }}
          w='10rem'
          src={Image4}
        />
      </MotionBox>
      <MotionBox
        initial='hidden'
        animate={controls}
        variants={variant3}
        w='full'
      >
        <Image
          mr={{ base: 'auto', sm: '0' }}
          border={{ base: '2px solid black', md: '4px solid black' }}
          rounded={{ base: 'md', md: 'xl' }}
          w='10rem'
          src={Image3}
        />
      </MotionBox>
      <MotionBox
        initial='hidden'
        animate={controls}
        variants={variant4}
        w='full'
      >
        <Image
          ml={{ base: 'auto', sm: '0' }}
          mb={{ base: '0rem', md: '6rem' }}
          border={{ base: '2px solid black', md: '4px solid black' }}
          rounded={{ base: 'md', md: 'xl' }}
          w='10rem'
          src={Image2}
        />
      </MotionBox>
    </Stack>
  );
};

export default BuddiesImages;
