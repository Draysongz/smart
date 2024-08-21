// // import React from 'react';
// import coin from '../../assets/Logo coin 1.png';
// import NavigationBar from '../NavigationBar';
// import bg from '../../assets/bg.png';
// import touchIcon from '../../assets/Natural User Interface 2.png';
// import gameIcon from '../../assets/Game Controller.png';
// import peopleIcon from '../../assets/People.png';
// import { Box } from '@chakra-ui/react';
// import { useUserStats } from '../../hooks/useUserStats';

// const AirdropPage = ({
//   userId,
//   name,
// }: {
//   userId: number | undefined
//   name: string | null
// }) => {
//     console.log(userId, name);
//      const { totalCoins, userRank, users} = useUserStats(userId);

 
//     return (
//         <section className='w-screen flex justify-center bg-black'>

//         <div className='border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow'>

//         <Box className='bg-dark-green w-full flex flex-col pt-4 pb-32 items-center rounded-t-3xl bg-cover bg-center gap-5' bgImage={bg}>

//         <div className='flex flex-col items-center'>
//             <img src={coin} alt="" />
//             <p className='text-white font-bold -mt-5 text-[2em]'>Airdrop</p>
//         </div>

//         <div className='text-white font-bold flex bg-dark-green items-center justify-center w-11/12 h-[100px] rounded-xl px-2 mb-10'>
//         <img src={coin} alt="" className='w-[20%]'/>
//         <span>
//         <p className='font-thin'>
//             Total Share Balance
//         </p>
//         <p className='text-2xl'>
//         { totalCoins ? new Intl.NumberFormat().format(Number(totalCoins?.toFixed(0))) : 0}
//         </p>
//         </span>
//         <span className='ml-[20%]'>
//         <p className='font-thin'>
//         Rank
//         </p>
//         <p className='text-2xl'>
//         {userRank}st
//         </p>
//         </span>
//         </div>
//         <div className='text-white font-bold flex bg-dark-green items-center justify-center w-11/12 h-[100px] rounded-xl px-2 gap-8 pl-4'>
//         <img src={touchIcon} alt="" className='w-[10%]'/>
//         <span>
//         <p className='font-thin'>
//             Total Touches
//         </p>
//         <p className='text-3xl'>
//         { totalCoins ? new Intl.NumberFormat().format(Number(totalCoins?.toFixed(0))) : 0}
//         </p>
//         </span>
//         <img src={coin} alt="" className='w-[15%] ml-[10%]'/>
//         </div>
//         <div className='text-white font-bold flex bg-dark-green items-center justify-center w-11/12 h-[100px] rounded-xl px-2 gap-8 pl-4'>
//         <img src={peopleIcon} alt="" className='w-[10%]'/>
//         <span>
//         <p className='font-thin'>
//             Daily Users
//         </p>
//         <p className='text-3xl'>
//             {users? users.length : 0}
//         </p>
//         </span>
//         <img src={coin} alt="" className='w-[15%] ml-[15%]'/>
//         </div>
//         <div className='text-white font-bold flex bg-dark-green items-center justify-center w-11/12 h-[100px] rounded-xl px-2  gap-8 pl-4'>
//         <img src={gameIcon} alt="" className='w-[10%]' />
//         <span>
//         <p className='font-thin'>
//             Total Players
//         </p>
//         <p className='text-3xl'>
//         {users? new Intl.NumberFormat().format(Number(users.length.toFixed(0))) : 0}
//         </p>
//         </span>
//         <img src={coin} alt="" className='w-[15%] ml-[15%]'/>
//         </div>

        
//         </Box>
//         </div>
//         <NavigationBar />
//         </section>
//     )
// };
// export default AirdropPage