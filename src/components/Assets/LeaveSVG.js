import { Box } from '@chakra-ui/react';
import { useParallax } from 'react-scroll-parallax';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const LeaveSVG = ({ transform, parallax }) => {
  return (
    <Box
      ref={parallax.ref}
      overflow={'hidden'}
      w='fit-content'
      display={'flex'}
      alignItems={'center'}
      transform={transform}
    >
      <Box w='2rem'>
        <svg viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0.400804 20.0937C0.468804 15.1644 2.39147 3.0284 19.3568 0.604401C20.7901 0.399067 22.1555 1.43907 22.1675 2.74173C22.2248 8.5004 20.5448 22.4964 2.83014 22.2857C1.50347 22.2684 0.384804 21.2697 0.400804 20.0937Z'
            fill='#86DD7A'
          />
        </svg>
      </Box>
    </Box>
  );
};

export default LeaveSVG;
