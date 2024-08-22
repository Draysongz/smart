// import React from 'react';
import coin from '../../assets/Logo coin 1.png';
import gift from '../../assets/gift.png';
import ticket from '../../assets/ticket.png';
import contact from '../../assets/contact.png';
import NavigationBar from '../NavigationBar';
import bg from '../../assets/bg.png'
import { Box } from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";



const EarnPage= ({
  userId,
  name,
}: {
  userId: number | undefined
  name: string | null
}) => {
    console.log(userId, name);
    return (
        <section className='w-screen flex justify-center h-[100%] bg-black'>

        <div className='border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow h-full'>

        <Box className='bg-dark-green w-full flex flex-col items-center justify-center rounded-t-3xl h-[100%] pb-32' backgroundImage={bg}>
        <img src={coin} alt="" className='w-[33%]'/>
        <h2 className='text-white text-3xl font-bold'>Earn More Coins</h2>
        <div className='w-full flex flex-col gap-6  mt-[100px] items-center'>
        <div className='w-10/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <img src={gift} alt="" />
        <span className='flex flex-col'>
            <p className='text-white'>Daily Reward</p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        <div className='w-10/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <img src={ticket} alt="" />
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Activate Promo Code. </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        <div className='w-10/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <img src={contact} alt="" />
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Add 10 new friends (0/10) 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        <a href="https://x.com/s_energy_coin" className='w-10/12'>
        <div className=' bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <Icon as={BsTwitterX} boxSize={6} color={'white'}/>
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Subscribe to X 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        </a>
        <a href="https://www.instagram.com/smart.energy.token/" className='w-10/12'>
        <div className='bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <Icon as={FaInstagram} boxSize={6} color={'white'}/>
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Subscribe to Instagram 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        </a>
        <a href="https://www.tiktok.com/@smart.energy.token" className='w-10/12'>
        <div className='bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <Icon as={FaTiktok} boxSize={6} color={'white'}/>
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Subscribe to TikTok 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        </a>
        <a href="https://t.me/+BtBJIPxsn21iOGQ8" className='w-10/12'>
        <div className='bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <Icon as={FaTelegram} boxSize={6} color={'white'}/>
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Subscribe to Telegram 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        </a>
        <a href="https://youtube.com/@smartenergytoken" className='w-10/12'>
        <div className='bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'>
        <Icon as={FaYoutube} boxSize={6} color={'white'}/>
        <span className='flex flex-col'>
            <p className='text-white whitespace-nowrap'>Subscribe to Youtube 
            </p>
            <p className='text-custom-gold'>+45,000</p>
        </span>
        </div>
        </a>
        </div>
        <Box className='bg-custom-greenbg w-screen' backgroundImage={bg}>

            
        </Box>
        <NavigationBar />
        </Box>
        </div>
        </section>
    )
};
export default EarnPage