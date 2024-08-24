import { Box, Progress } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Users } from 'api-contract';

const levels = ["Spark Initiate", "Current Conductor", "Power Pioneer", "Voltage Vanguard", "Energy Elite", "Quantum Master"];

const ProgressBar = ({ userLevel, userData, thresh }: { userLevel: number | undefined, userData: Users, thresh: number[] }) => {

  // Log the props to verify they are updating
 


  if (userLevel === undefined || userLevel < 1 || userLevel > levels.length) {
    return null;
  }

  const progress = (userData.coinsEarned / thresh[userLevel - 1]) * 100;

  return (
    <Box width="100%" className='pl-[20px] h-[6vh]'>
      <span className='text-white flex justify-between w-[115px] text-[12px]'>
        <p>{levels[userLevel - 1]} <ChevronRightIcon /> </p>
        <p>{userLevel}<span className='opacity-50'>/ 6</span></p>
      </span>
      <Progress width="110px" value={progress} height="3px" colorScheme='yellow' className='rounded-full'/>
    </Box>
  );
};

export default ProgressBar;
