import { Box, Progress } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Users } from 'api-contract';
import { useState, useEffect } from 'react';
import { useUserApi } from '../hooks/useUserData';

// const levels = ["Spark Initiate", "Current Conductor", "Power Pioneer", "Voltage Vanguard", "Energy Elite", "Quantum Master"];
// const levelMinPoints = [5000000, 15000000, 250000000, 50000000, 100000000, 200000000];

const ProgressBar = ({ levels, userData, levelMinPoints }: { levels: string[] | undefined, userData: Users, levelMinPoints: number[] }) => {
 const [levelIndex, setLevelIndex] = useState(userData?.userLevel! );
 const {updateUserData} = useUserApi()

 useEffect(() => {
    if (!userData || !userData.coinsEarned) return;

    // Determine the current level based on coinsEarned
    const index = levelMinPoints.findIndex(minPoints => userData.coinsEarned < minPoints);
    setLevelIndex(index === -1 ? levelMinPoints.length - 1 : index - 1);
  }, [userData.coinsEarned]);

  // Ensure levelIndex is within bounds
  const validLevelIndex = Math.max(0, Math.min(levelIndex, levels!.length - 1));
  const currentLevelMin = levelMinPoints[validLevelIndex];
  const nextLevelMin = levelMinPoints[validLevelIndex + 1] || currentLevelMin + 1;

  // Calculate progress percentage
  const progressPercentage = ((userData.coinsEarned - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;

  useEffect(()=>{
    updateUserData(userData?.userId, {
      userLevel: levelIndex + 1
    })
  },[validLevelIndex])



  return (
    <Box width="100%" className='pl-[20px] h-[6vh]'>
      <span className='text-white flex justify-between w-[148px] text-[12px]'>
        <p>{levels ? levels[validLevelIndex] : 'N/A'}<ChevronRightIcon /> </p>
        <p>{validLevelIndex + 1}<span className='opacity-50'>/ 6</span></p>
      </span>
      <Progress width="140px" value={progressPercentage} height="3px" colorScheme='yellow' className='rounded-full'/>
    </Box>
  );
};

export default ProgressBar;
