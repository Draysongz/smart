// import { useState, useEffect } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'

const ProgressBar = () => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         clearInterval(timer);
  //         return oldProgress;
  //       }
  //       return Math.min(oldProgress + 10, 100);
  //     });
  //   }, 10000); // Update every second

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box width="100%" className='pl-[20px] h-[6vh]'>
        <span className='text-white flex justify-between w-[100px] text-[12px]'>
            <p>Bronze <ChevronRightIcon /> </p>
            <p>1<span className='opacity-50'>/ 6</span></p>
        </span>
      <Progress width="110px" value={16.66666666666667} height="3px" colorScheme='yellow' className='rounded-full'/>
    </Box>
  );
};

export default ProgressBar;
