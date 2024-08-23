// import { useState, useEffect } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Users } from 'api-contract';


const levels=["Spark Initiate", "Current Conductor" ,"Power Pioneer", "Voltage Vanguard", "Energy Elite" ,"Quantum Master"] 

const ProgressBar = ({userLevel, userData, thresh}:{userLevel: number | undefined, userData: Users, thresh: number[]}) => {
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
        <span className='text-white flex justify-between w-[115px] text-[12px]'>
            <p>{levels[userLevel! - 1]} <ChevronRightIcon /> </p>
            <p>{userLevel}<span className='opacity-50'>/ 6</span></p>
        </span>
      <Progress width="110px" value={(userData.coinsEarned / thresh[userLevel! -1]) * 100} height="3px" colorScheme='yellow' className='rounded-full'/>
    </Box>
  );
};

export default ProgressBar;
