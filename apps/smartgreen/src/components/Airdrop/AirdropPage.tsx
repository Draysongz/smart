// import React from 'react';
import coin from '../../assets/Logo coin 1.png';
import NavigationBar from '../NavigationBar';
import bg from '../../assets/bg.png';
// import touchIcon from '../../assets/Natural User Interface 2.png';
// import gameIcon from '../../assets/Game Controller.png';
// import peopleIcon from '../../assets/People.png';
import Points from '../Points';
import Withdrawal from '../Withdrawal';
import { Box, Button } from '@chakra-ui/react';
import { SlBadge } from "react-icons/sl";
import { FaInfoCircle } from "react-icons/fa";
import { Icon, Flex, useDisclosure, Text } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    // DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const AirdropPage = ({
  userId,
}: {
  userId: number | undefined
}) => {
console.log(userId, name);

const {isOpen, onClose, onOpen} = useDisclosure()
// const {isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClosed } = useDisclosure()


 
    return (
        <section className='w-screen flex justify-center bg-black'>

        <div className='border-t-custom-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-yellow shadow-custom-Syellow mt-3 py-2 '>

        <Box className='bg-dark-green w-full flex flex-col pt-4 pb-32 items-center min-h-screen rounded-t-3xl bg-cover bg-center gap-5' bgImage={bg}>

        <div className='flex flex-col items-center'>
            <img src={coin} alt="" />
            <p className='text-white font-bold -mt-5 text-[2em]'>Airdrop</p>
        </div>

        <div className='text-white font-bold flex bg-dark-green items-center justify-center w-10/12 h-[100px] rounded-xl px-2' onClick={onOpen}>
        <span className='w-[80%] text-center'>
        <Text className='font-extralight'>
                AirDrop allocation points
            </Text>
            <Flex className='gap-2 items-center justify-center'>
                <Icon as={SlBadge} boxSize={6} color={'white'}/>
                <Text className='text-[22px]'>TBA</Text>
            </Flex>
        </span>
        <Icon as={FaInfoCircle} className='mt-[-60px]' />
        </div>

        <Tabs variant='unstyled' colorScheme='green' bgColor={''} className='w-10/12'>
  <TabList bgColor={"rgba(19, 46, 37, 0.8)"} p={1} borderRadius={"12px"} className='' >
  <Tab
                color={"#E7ECEA"}
                _selected={{
                  color: "black",
                  bg: "#FFCC23",
                  outline: "none",
                  border: "none",
                }}
                width={'50%'}
              >
                Points
              </Tab>
              <Tab
                color={"#E7ECEA"}
                _selected={{
                  color: "black",
                  bg: "#FFCC23",
                  outline: "none",
                  border: "none",
                }}
                width={'50%'}
              >
                Withdrawal
              </Tab>
  </TabList>
  <TabPanels>
    <TabPanel p={'2px'}>
      <Points />
    </TabPanel>
    <TabPanel p={'2px'}>
        <Withdrawal />
    </TabPanel>
  </TabPanels>
</Tabs>

        
        </Box>
        </div>
        <NavigationBar />
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
                AirDrop points
            </Text>
            <Flex className='gap-2 items-center justify-center'>
                <Icon as={SlBadge} boxSize={10} color={'green   '}/>
                <Text className='text-[25px]'>TBA</Text>
            </Flex>
            <Text className='opacity-70'>All the activities that users do playing SET convert into AirDrop points. Every single thing is important: the way you play, your social activity, generated energies and sources. All your points will be taken into account, and the AirDrop will be distributed accordingly to each player</Text>
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
        </section>
    )
};
export default AirdropPage