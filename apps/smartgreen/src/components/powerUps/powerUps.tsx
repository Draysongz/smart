// import React from 'react';
import coin from '../../assets/Logo coin 1.png';
import bolt from "../../assets/BOLT 1.png";
import NavigationBar from '../NavigationBar';
import bg from '../../assets/bg.png'
import { Box } from '@chakra-ui/react';
import spaceship from '../../assets/spaceship.svg';
import cursor from '../../assets/pointer.svg';
import battery from '../../assets/battery.svg'
import { useRealtimeUserData } from '../../hooks/useUserData';


const PowerUps= ({
    userId,
    name,
  }: {
    userId: number | undefined
    name: string | null
  }) => {
      console.log(userId, name);
       const {userData} = useRealtimeUserData(userId, name)
      return (
          <section className='w-screen flex justify-center min-h-screen bg-black'>
  
          <div className='border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow min-h-screen'>
  
          <Box className='bg-dark-green w-full flex flex-col items-center justify-center rounded-t-3xl pt-20 pb-32 h-[100%]' backgroundImage={bg}>
          <h2 className='text-white text-xl opacity-50'>Your balance</h2>
          <div className='text-white font-bold flex bg-transparent items-center justify-center w-11/12 rounded-xl px-2 mb-10'>
          <img src={coin} alt="" className='w-[15%]'/>
          <p className='text-3xl'>
        { userData ? new Intl.NumberFormat().format(Number(userData?.coinsEarned.toFixed(0))) : 0}
        </p>
        </div>
        <div className='w-[100%] flex flex-col gap-6'>
            <div className='w-full flex flex-col gap-1   items-center'>
                        <p className='text-white text-[18px] font-semibold w-11/12 pb-[15px]'>Free Daily Booster</p>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
                    <img src={bolt} alt="" className="w-6" />
                    <span className='flex flex-col'>
                    <p className='text-white'>Full Energy</p>
                    <p className='text-custom-gold opacity-50'>6/6 available</p>
                    </span>
                    </div>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8 opacity-70'>
                    <img src={spaceship} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white whitespace-nowrap'>Turbo </p>
                        <p className='text-custom-gold'>Coming soon</p>
                    </span>
                    </div>
                    </div>
                    <div className='w-full flex flex-col gap-1   items-center'>
                        <p className='text-white text-[18px] font-semibold w-11/12 pb-[15px]'>Boosters</p>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
                    <img src={cursor} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white'>Multitap</p>
                        <span className='flex gap-1'>
                        <img src={coin} alt="" className='w-[10%]'/>
                        <p className='text-custom-gold'>4k</p>
                        <p className='text-white opacity-50 font-semibold'>
                            <sup>.</sup>
                            3 lvl
                        </p>
                    </span>
                    </span>
                    </div>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
                    <img src={battery} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white'>Energy Limit</p>
                        <span className='flex gap-1'>
                        <img src={coin} alt="" className='w-[10%]'/>
                        <p className='text-custom-gold'>2k</p>
                        <p className='text-white opacity-50 font-semibold'>
                            <sup>.</sup>
                            2 lvl
                        </p>
                    </span>
                    </span>
                    </div>

            </div>
        </div>
          <NavigationBar />
          </Box>
          </div>
          </section>
      )
  };
  export default PowerUps