// import React from 'react';
import coin from '../../assets/Logo coin 1.png';
import bolt from "../../assets/kwph.png";
import NavigationBar from '../NavigationBar';
import bg from '../../assets/bg.png'
import { Box, Flex, Text, Button,} from '@chakra-ui/react';
import spaceship from '../../assets/spaceship.svg';
import cursor from '../../assets/pointer.svg';
import battery from '../../assets/battery.svg';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    // DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react';
import { Users } from 'api-contract';
import {io} from 'socket.io-client'
import { useState, useEffect } from 'react';
import { useUserApi } from '../../hooks/useUserData';
import { toast } from 'react-toastify';

const socket = io('http://localhost:3000');

const PowerUps= ({
    userId,
    name,
    userData
  }: {
    userId: number | undefined
    name: string | null,
    userData: Users
  }) => {
      console.log(userId, name);
      const [userDeets, setUserDeets] = useState<Users | null>()
      const {isOpen, onClose, onOpen} = useDisclosure()
      const {isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClosed } = useDisclosure()
      const {isOpen: isThirdOpen, onOpen: onThirdOpen, onClose: onThirdClosed } = useDisclosure()

       console.log(userData)
       const {getOne, updateUserData} = useUserApi()

    useEffect(() => {
    const getUser = async (userId : number) => {
      try {
        const userResponse = await getOne(userId);
       if(userResponse.status === 200){
        setUserDeets(userResponse.body)
       }
      } catch (error) {}
    };

    getUser(userId!)
  }, []);

 useEffect(()=>{
    socket.on("userUpdated", (updatedUser)=>{
      setUserDeets(updatedUser)
    })
  }, [])

     const handleMultiTap = async () => {
        if (!userDeets) return;
        const fee = 2000 * (2 ** (userDeets.tapPower - 1))
        if (userDeets.coinsEarned < fee) {
            toast.error('Insufficient coins');
            return;
        }

        try {
            await updateUserData(userId!, {
                tapPower: userDeets.tapPower + 1,
                coinsEarned: userDeets.coinsEarned - fee
            });
            toast.success('MultiTap upgraded!');
        } catch (error) {
           toast.error('Failed to upgrade MultiTap');
           console.log(error)
        }
    };

    const handleEnergyLimit = async () => {
        if (!userDeets) return;
        const fee = 2000 * (2 ** (userDeets.rechargeLevel - 1));
        if (userDeets.coinsEarned < fee) {
            alert('Insufficient coins');
            return;
        }

        try {
            await updateUserData(userId!, {
                tapEnergy: userDeets.tapEnergy + 1000,
                rechargeLevel: userDeets.rechargeLevel + 1,
                coinsEarned: userDeets.coinsEarned - fee
            });
            toast.success('Energy Limit upgraded!');
        } catch (error) {
            toast.error('Failed to upgrade Energy Limit');
            console.log(error)
        }
    };

    
      return (
          <section className='w-screen flex justify-center min-h-screen bg-black'>
  
          <div className='border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow min-h-screen'>
  
          <Box className='bg-dark-green w-full flex flex-col items-center justify-center rounded-t-3xl pt-20 pb-32 h-[100%]' backgroundImage={bg}>
          <h2 className='text-white text-xl opacity-50'>Your balance</h2>
          <div className='text-white font-bold flex bg-transparent items-center justify-center w-11/12 rounded-xl px-2 mb-10'>
          <img src={coin} alt="" className='w-[15%]'/>
          <p className='text-3xl'>
        { userDeets ? new Intl.NumberFormat().format(Number(userDeets?.coinsEarned.toFixed(0)))!: 0}
        </p>
        </div>
        <div className='w-[100%] flex flex-col gap-6'>
            <div className='w-full flex flex-col gap-1   items-center'>
                        <p className='text-white text-[18px] font-semibold w-11/12 pb-[15px]'>Free Daily Booster</p>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-6 items-center px-8'onClick={onOpen}>


                    <img src={bolt} alt="" className="w-6" />
                    <span className='flex flex-col'>
                    <p className='text-white'>Full Energy</p>
                    <p className='text-custom-gold opacity-50'>6/6 available</p>
                    </span>
                    </div>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-6 items-center px-8 opacity-70'>
                    <img src={spaceship} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white whitespace-nowrap'>Turbo </p>
                        <p className='text-custom-gold'>Coming soon</p>
                    </span>
                    </div>
                    </div>
                    <div className='w-full flex flex-col gap-1   items-center'>
                        <p className='text-white text-[18px] font-semibold w-11/12 pb-[15px]'>Boosters</p>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-6 items-center px-8'onClick={onSecondOpen}>
                    <img src={cursor} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white'>Multitap</p>
                        <span className='flex gap-1'>
                        <img src={coin} alt="" className='w-[10%]'/>
                        <p className='text-custom-gold'>{userDeets && 2000 * (2 ** (userDeets.tapPower - 1))}</p>
                        <p className='text-white opacity-50 font-semibold'>
                            <sup>.</sup>
                            {userDeets?.tapPower} lvl
                        </p>
                    </span>
                    </span>
                    </div>
                    <div className='w-11/12 bg-dark-green rounded-2xl h-[80px] flex gap-6 items-center px-8'onClick={onThirdOpen}>
                    <img src={battery} alt=""className=' w-8' />
                    <span className='flex flex-col'>
                        <p className='text-white'>Energy Limit</p>
                        <span className='flex gap-1'>
                        <img src={coin} alt="" className='w-[10%]'/>
                        <p className='text-custom-gold'>{userDeets && 2000 * (2 ** (userDeets.rechargeLevel - 1))}</p>
                        <p className='text-white opacity-50 font-semibold'>
                            <sup>.</sup>
                            {userDeets?.rechargeLevel} lvl
                        </p>
                    </span>
                    </span>
                    </div>
            {/* Full Energy */}
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

                <DrawerBody>
                    {/* <Input placeholder='Type here...' /> */}
                    <Box className=' flex flex-col items-center justify-center py-3 text-white gap-3'>
                    <img src={bolt} alt="" className='w-[40px]'/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        Full Energy
                    </Text>
                    <Text className='opacity-70'>
                        Recharge your energy to the maximum and let's go a few more rounds
                    </Text>
                    <Flex className='gap-2 items-center justify-center'>
                        <img src={coin} alt="" className='w-[50px]'/>
                        <Text className='text-[25px]'>Free</Text>
                    </Flex>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={onClose} height="70px" fontSize="25px" _focus={{ boxShadow: 'none', border: "none", outline: "none" }}
                _active={{ bg: '#7EB43C', border: "none", outline: "none" }}
                bgColor='#7EB43C'
                _hover={{ bg: '#7EB43C', border: "none", outline: "none" }}>
                        Go ahead
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* MultiTap */}
            <Drawer 
                isOpen={isSecondOpen}
                placement='bottom'
                onClose={onSecondClosed}
            
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

                <DrawerBody>
                    {/* <Input placeholder='Type here...' /> */}
                    <Box className=' flex flex-col items-center justify-center py-3 text-white gap-5'>
                    <img src={cursor} alt="" className='w-[100px]'/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        MultiTap
                    </Text>
                    <Text className='opacity-70'>
                        Increase the amount of coins you earn per tap
                    </Text>
                    <Text className='opacity-70'>
                        +1 coin for tap for level { userDeets && userDeets?.tapPower + 1}
                    </Text>
                    <Flex className='gap-2 items-center justify-center text-center'>
                        <img src={coin} alt="" className='w-[50px]'/>
                        <Text className='text-custom-gold text-[25px] text-center items-center font-semibold flex gap-1'>
                            {userDeets && 2000 * (2 ** (userDeets.tapPower - 1))}
                        <Text className='flex text-[20px] text-gray-400'>
                        <p className='-mt-4 text-[30px]'>.</p>
                            { userDeets && userDeets?.tapPower + 1} lvl
                        </Text>
                        </Text>
                    </Flex>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={async ()=>{
                    await handleMultiTap()
                    onSecondClosed()
                }} height="70px" fontSize="25px" _focus={{ boxShadow: 'none', border: "none", outline: "none" }}
                _active={{ bg: '#7EB43C', border: "none", outline: "none" }}
                bgColor='#7EB43C'
                _hover={{ bg: '#7EB43C', border: "none", outline: "none" }}
                >
                        Go ahead
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Energy Limit */}
            <Drawer 
                isOpen={isThirdOpen}
                placement='bottom'
                onClose={onThirdClosed}
            
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

                <DrawerBody>
                    {/* <Input placeholder='Type here...' /> */}
                    <Box className=' flex flex-col items-center justify-center py-3 text-white gap-5'>
                    <img src={battery} alt="" className='w-[100px]'/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        Energy Limit
                    </Text>
                    <Text className='opacity-70'>
                        Increase the amount of energy
                    </Text>
                    <Text className='opacity-70'>
                        {userDeets && userDeets.tapEnergy + 1000} energy points for level {userDeets && userDeets.rechargeLevel}
                    </Text>
                    <Flex className='gap-2 items-center justify-center text-center'>
                        <img src={coin} alt="" className='w-[50px]'/>
                        <Text className='text-custom-gold text-[25px] text-center items-center font-semibold flex gap-1'>
                           {userDeets && 2000 * (2 ** (userDeets.rechargeLevel - 1))}
                        <Text className='flex text-[20px] text-gray-400'>
                        <p className='-mt-4 text-[30px]'>.</p>
                           {userDeets && userDeets.rechargeLevel + 1}lvl
                        </Text>
                        </Text>
                    </Flex>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={async ()=>{
                    await handleEnergyLimit()
                    onThirdClosed()
                }} height="70px" fontSize="25px" _focus={{ boxShadow: 'none', border: "none", outline: "none" }}
                _active={{ bg: '#7EB43C', border: "none", outline: "none" }}
                bgColor='#7EB43C'
                _hover={{ bg: '#7EB43C', border: "none", outline: "none" }}>
                        Go ahead
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            </div>
        </div>
          <NavigationBar />
          </Box>
          </div>
          </section>
      )
  };
  export default PowerUps