// import React from 'react';
import coin from '../../assets/Logo coin 1.png';
import gift from '../../assets/gift.png';
import ticket from '../../assets/ticket.png';
import contact from '../../assets/contact.png';
import NavigationBar from '../NavigationBar';
import bg from '../../assets/bg.png'
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import {Icon, Text} from '@chakra-ui/react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Users } from 'api-contract';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useUserApi } from '../../hooks/useUserData';
import {toast} from 'react-toastify'

type boostpops ={
        userId: number | undefined
        userData: Users | null   
}

const dailyRewards = [5000, 10000, 50000, 100000, 250000, 500000, 750000, 1000000, 2000000, 5000000]; 

const EarnPage= ({
  userId,
  userData
}:boostpops ) => {
    const [isClaiming, setIsClaiming] = useState(false);
    const [canClaimToday, setCanClaimToday] = useState(false);
    console.log(userId, userData);
    const {updateUserData} = useUserApi()


 useEffect(() => {
  if (userData) {
    const now = new Date();
    const lastClaimDate = new Date(userData?.lastClaimDate || 0);

    // Normalize current date to midnight
    const nowDate = new Date(now.setHours(0, 0, 0, 0));
    const lastClaimDateNormalized = new Date(lastClaimDate.setHours(0, 0, 0, 0));
    let dayDifference = nowDate.getTime() - lastClaimDateNormalized.getTime()
    let currentDay = userData.streakLevel || 1;

    if (dayDifference > 1) {
      // If missed a day, reset to Day 1
      currentDay = 1;
        // Set the current streak day
    setCanClaimToday(true);
    } else if (dayDifference === 0) {
      // Already claimed today
      setCanClaimToday(false);
      return;
    } else {
      // Move to the next day
      currentDay = (currentDay % 10) + 1;
    // Set the current streak day
    setCanClaimToday(true);
    }

  
  }
}, [userData]);




const handleClaim = async () => {
  if (userId === undefined) {
    toast.error("User is required to claim rewards.");
    return;
  }

  setIsClaiming(true);
  try {
    const now = new Date();
    const lastClaimDateStr = userData?.lastClaimDate || "1970-01-01T00:00:00.000Z"; // Default to an old date if not set
    const lastClaimDate = new Date(lastClaimDateStr);

    // Extract date components (year, month, day) for comparison
    const nowYear = now.getUTCFullYear();
    const nowMonth = now.getUTCMonth();
    const nowDay = now.getUTCDay();


    const lastClaimYear = lastClaimDate.getUTCFullYear();
    const lastClaimMonth = lastClaimDate.getUTCMonth();
    const lastClaimDay = lastClaimDate.getUTCDay();

    console.log(lastClaimDay, )

    if (nowYear === lastClaimYear && nowMonth === lastClaimMonth && nowDay === lastClaimDay) {
      // Already claimed today
      toast.info("You have already claimed your reward today.");
      return;
    }

    let currentDay = userData?.streakLevel || 1;

    const dayDifference = Math.floor((now.getTime() - lastClaimDate.getTime()) / (1000 * 3600 * 24));

    if (dayDifference > 1) {
      // If missed a day, reset to Day 1
      currentDay = 1;
    } else {
      // Move to the next day
      currentDay = (currentDay % 10) + 1;
    }

    // Calculate reward based on the current day
    const reward = dailyRewards[currentDay - 1];

    // Update user data
    await updateUserData(userId, {
      lastClaimDate: now.toISOString(), // Store the date in ISO format
      streakLevel: currentDay,
      coinsEarned: (userData?.coinsEarned || 0) + reward, // Add to existing coins
    });

    toast.success(`Reward claimed successfully! You earned ${reward.toLocaleString()} coins.`);
  } catch (error) {
    toast.error("Failed to claim reward. Please try again.");
  } finally {
    setIsClaiming(false);
  }
};










    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <section className='w-screen flex justify-center h-[100%] bg-black'>

        <div className='border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow h-full'>

        <Box className='bg-dark-green w-full flex flex-col items-center justify-center rounded-t-3xl h-[100%] pb-32' backgroundImage={bg}>
        <img src={coin} alt="" className='w-[33%]'/>
        <h2 className='text-white text-3xl font-bold'>Earn More Coins</h2>
        <div className='w-full flex flex-col gap-6  mt-[100px] items-center'>
        <div className='w-10/12 bg-dark-green rounded-2xl h-[80px] flex gap-16 items-center px-8'  onClick={onOpen}>
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
        <NavigationBar />
        </Box>
        </div>

        <Drawer 
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
       
      >
        <DrawerOverlay />
        <DrawerContent
            bg= '#132E25'
            bgImage= {`url(${bg})`}
            bgSize= 'cover'
            bgPosition= 'center'
            bgBlendMode="overlay"
            borderTopRadius="25px"
        >

          <DrawerCloseButton color="white" />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Box className=' flex flex-col items-center justify-center py-3 text-white gap-3'>
            <Icon as={FaCalendarAlt} boxSize={20} color={'#FCA61B'}/>
            <Flex className='flex-col text-center gap-3 w-[100%]'>
            <Text className=' text-[1.5em] font-semibold'>Daily reward</Text>
            <Text className='opacity-70'>Don't miss collecting rewards daily, or progress will be reset</Text>
            </Flex>

            <Flex className='w-[100%] flex-col gap-2'>
                <Flex className='w-[100%] justify-center gap-2'>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 border-custom-yellow border-custom-sm text-center'>
                        <Text>Day 1</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>5K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 2</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>10K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 3</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>50K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 4</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>100K</Text>
                    </Flex>
                </Flex>
                <Flex className='w-[100%] justify-center gap-2'>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 5</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>250K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 6</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>500K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 7</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>750K</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[25%] rounded-lg py-2 text-center'>
                        <Text>Day 8</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>1M</Text>
                    </Flex>
                </Flex>
                <Flex className='w-[100%] gap-2'>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[23%] rounded-lg py-2 text-center'>
                        <Text>Day 9</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>2M</Text>
                    </Flex>
                    <Flex className='flex-col justify-center items-center bg-custom-greentxt  gap-1 w-[23%] rounded-lg py-2 text-center'>
                        <Text>Day 10</Text>
                        <img src={coin} alt="" className='w-[40px]' />
                        <Text>5M</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Button className='w-[100%] text-black font-bold' onClick={async ()=>{
                handleClaim()
                onClose()
            }} disabled={!canClaimToday || isClaiming}>
                CLAIM
            </Button>
            </Box>

          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
        </section>
    )
};
export default EarnPage