import { Box, Progress } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Users } from 'api-contract';
import { useState, useEffect } from 'react';

// const levels = ["Spark Initiate", "Current Conductor", "Power Pioneer", "Voltage Vanguard", "Energy Elite", "Quantum Master"];
// const levelMinPoints = [5000000, 15000000, 250000000, 50000000, 100000000, 200000000];

const ProgressBar = ({ levels, userData, levelMinPoints }: { levels: string[] | undefined, userData: Users, levelMinPoints: number[] }) => {
 const [levelIndex, setLevelIndex] = useState(userData?.userLevel! );
  // Log the props to verify they are updating
 
  useEffect(() => {
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (userData.coinsEarned >= nextLevelMin && levelIndex < levels!.length - 1) {
      console.log('running update')
      setLevelIndex(levelIndex + 1);
    }else{
      setLevelIndex(0 );
    }
  }, [userData.coinsEarned, levelIndex]);





  return (
    <Box width="100%" className='pl-[20px] h-[6vh]'>
      <span className='text-white flex justify-between w-[148px] text-[12px]'>
        <p>{levels![levelIndex]} <ChevronRightIcon /> </p>
        <p>{levelIndex + 1}<span className='opacity-50'>/ 6</span></p>
      </span>
      <Progress width="140px" value={(userData.coinsEarned / levelMinPoints[levelIndex ]) * 100} height="3px" colorScheme='yellow' className='rounded-full'/>
    </Box>
  );
};

export default ProgressBar;
