// import React from "react";
import coin from "../../src/assets/coin.png"
import bg from '../assets/bg.png'
import { SlBadge } from "react-icons/sl";
import { FaInfoCircle } from "react-icons/fa";
import { Icon, Flex, useDisclosure, Text } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { FaPeopleGroup } from "react-icons/fa6";   
import { FaCalendarAlt } from 'react-icons/fa';
import bolt from '../assets/kwph.png';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    // DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';


function Points()  {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const {isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClosed } = useDisclosure()
    const {isOpen: isThirdOpen, onOpen: onThirdOpen, onClose: onThirdClosed } = useDisclosure()
    const {isOpen: isFourthOpen, onOpen: onFourthOpen, onClose: onFourthClosed } = useDisclosure()

    return(
        <div className="py-3 flex flex-col gap-2">
            <div className='text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5' onClick={onOpen}>
            <Flex className="gap-4">
            <img src={coin} alt="" className='w-[20%]'/>
            <span className="">
            <Text className="font-medium">Passive Income</Text>
            <Flex className='gap-2 items-center'>
                <Icon as={SlBadge} boxSize={5} color={'green   '}/>
                <Text className='text-[15px]'>TBA</Text>
            </Flex>
            </span>
            </Flex>
            <Icon as={FaInfoCircle} boxSize={6} color={'grey'}/>
            </div>
            <div className='text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5' onClick={onSecondOpen}>
            <Flex className="gap-4 items-center">
            <Icon as={FaCalendarAlt} boxSize={'42px '} color={'#FCA61B'}/>
            <span className="">
            <Text className="font-medium">Earn tasks</Text>
            <Flex className='gap-2 items-center'>
                <Icon as={SlBadge} boxSize={5} color={'green'}/>
                <Text className='text-[15px]'>TBA</Text>
            </Flex>
            </span>
            </Flex>
            <Icon as={FaInfoCircle} boxSize={6} color={'grey'}/>
            </div>
            <div className='text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5' onClick={onThirdOpen}>
            <Flex className="gap-5">
            <Icon as={FaPeopleGroup} boxSize={'40px'} color={'#fca61b'}/>
            <span className="">
            <Text className="font-medium">Friends</Text>
            <Flex className='gap-2 items-center'>
                <Icon as={SlBadge} boxSize={5} color={'green   '}/>
                <Text className='text-[15px]'>TBA</Text>
            </Flex>
            </span>
            </Flex>
            <Icon as={FaInfoCircle} boxSize={6} color={'grey'}/>
            </div>
            <div className='text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5' onClick={onFourthOpen}>
            <Flex className="gap-6 items-center">
            <img src={bolt} alt="" className='w-[35px] h-[30px]'/>
            <span className="">
            <Text className="font-medium">Generated Energy</Text>
            <Flex className='gap-2 items-center'>
                <Icon as={SlBadge} boxSize={5} color={'green   '}/>
                <Text className='text-[15px]'>TBA</Text>
            </Flex>
            </span>
            </Flex>
            <Icon as={FaInfoCircle} boxSize={6} color={'grey'}/>
            </div>
            {/* Passive Income */}
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
                    <img src={coin} alt="" className='w-[100px]'/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        Passive Income
                    </Text>
                    <Flex className='gap-2 items-center justify-center'>
                        <Icon as={SlBadge} boxSize={10} color={'green   '}/>
                        <Text className='text-[25px]'>TBA</Text>
                    </Flex>
                    <Text className='opacity-70'>The golden rule of a successful business is that it should work for you. Passive income is an important concept of the game. Invest your in-game currency and make sure your exchange mines more assets for you</Text>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={onClose} height="70px" fontSize="25px">
                        Close
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Earn tasks */}
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
                    <Icon as={FaCalendarAlt} boxSize={'80px '} color={'#FCA61B'}/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        Earn Tasks
                    </Text>
                    <Flex className='gap-2 items-center justify-center'>
                        <Icon as={SlBadge} boxSize={10} color={'green   '}/>
                        <Text className='text-[25px]'>TBA</Text>
                    </Flex>
                    <Text className='opacity-70'>We are grateful for boosting our communities, and we hope that you like our educational content. Earn tasks help us grow and are, of course, rewarded</Text>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={onSecondClosed} height="70px" fontSize="25px">
                        Close
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Friends */}
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
                    <Box className=' flex flex-col items-center justify-center py-3 text-white gap-3'>
                    <Icon as={FaPeopleGroup} boxSize={'80px'} color={'#fca61b'}/>
                    <Flex className='flex-col text-center gap-3 w-[100%]'>
                    <Text className=' text-[1.5em] font-semibold'>
                        Friends
                    </Text>
                    <Flex className='gap-2 items-center justify-center'>
                        <Icon as={SlBadge} boxSize={10} color={'green   '}/>
                        <Text className='text-[25px]'>TBA</Text>
                    </Flex>
                    <Text className='opacity-70'>SET are the next big thing. SET is become the first environmental and energy source oriented fast growing crypto community ever, and we are very grateful to you for that. If you bring in friends who are active players you should be rewarded for that</Text>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={onThirdClosed} height="70px" fontSize="25px">
                        Close
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Generated Energy */}
            <Drawer 
                isOpen={isFourthOpen}
                placement='bottom'
                onClose={onFourthClosed}
            
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
                        Generated Energy
                    </Text>
                    <Flex className='gap-2 items-center justify-center'>
                        <Icon as={SlBadge} boxSize={10} color={'green   '}/>
                        <Text className='text-[25px]'>TBA</Text>
                    </Flex>
                    <Text className='opacity-70'>
                        Every Spin, Every Tap, Every upgrades you accumulate every time you play on SET is returned back to you as Generated Energy this way you can monitor and be aware of how much you're earning
                    </Text>
                    </Flex>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button className='w-[100%] text-black font-bold' onClick={onFourthClosed} height="70px" fontSize="25px">
                        Close
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
 };

 export default Points;