import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Container,
  Box,
  Center,
  Image,
} from '@chakra-ui/react';
import { FaMinus } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import BorderSVG2 from '../Assets/BorderSVG2.svg';

const Faq = ({ scrollRef }) => {
  return (
    <Container ref={scrollRef} maxW='full' p='0' m='0' bg={'#FCF0FC'}>
      <Container
        zIndex={'1'}
        transform={{
          base: 'translateY(-2.8rem)',
          sm: 'translateY(-2.2rem)',
          md: 'translateY(-3.5rem)',
          lg: 'translateY(-6rem)',
        }}
        h={{ base: '3rem', sm: 'fit-content' }}
        maxW='full'
        overflow='hidden'
        display='flex'
        alignItems={'flex-end'}
        justifyContent='center'
        p='0'
        m='0'
      >
        <Box>
          <Image
            objectFit={'cover'}
            objectPosition='center'
            src={BorderSVG2}
            w='100vw'
          />
        </Box>
        <Center alignSelf={'end'} position={'absolute'} w='full'></Center>
      </Container>
      <Container
        bg={'#FCF0FC'}
        initial='hidden'
        maxW='8xl'
        py={{ base: '4rem', md: '8rem' }}
      >
        <Text
          textAlign='center'
          fontSize={{ base: '3xl', md: '5xl' }}
          fontFamily={'Fredoka One'}
        >
          QNA
        </Text>
        <Accordion
          fontFamily={'Fredoka One'}
          allowMultiple
          mx='auto'
          maxW='3xl'
        >
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Mint Date?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  Our plan is to launch in June 2022. The official announcement
                  will be made on our social media handles - Twitter, Discord,
                  and Instagram. Follow us and stay tuned for further updates.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      What is the supply?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='16px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  We have 8888 Buddies from BloomTown waiting to find their
                  buddy, a holder can mint 4 buddies at a time.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Secondary market royalty?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  5%
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      What i can do with my Bloom Buddy?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  Holders of Bloom Buddies will benefit from exclusive drops and
                  earning/staking opportunities and will get a chance to be a
                  part of a digital RPG world.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Is there a WL?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  Yes, we have WL spot drops regularly on our social media
                  platforms. Please make sure you are following us and checking
                  official links for more regular updates.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Blockchain?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  Ethereum ERC721A
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Who is behind the project?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  You can let us know in the additional information section when
                  placing your order or you can let our driver know when he
                  collects the order.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            bg='#D1E2FC'
            p='1rem'
            rounded={'2rem'}
            my='2rem'
            border='0'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ boxShadow: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Box
                      fontSize={{ base: 'md', md: 'xl' }}
                      flex='1'
                      textAlign='left'
                      pr={'1rem'}
                    >
                      Do I need to do anything before my order?
                    </Box>
                    {isExpanded ? (
                      <FaMinus fontSize='18px' />
                    ) : (
                      <BsPlusLg fontSize='18px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight={'300'}
                  pb={4}
                >
                  Yes, remove any collar stiffeners and empty the pockets of the
                  items.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </Container>
  );
};

export default Faq;
