// import React from "react";
import bg from "../assets/bg.png";
// import { SlBadge } from "react-icons/sl";
import { IoAlertCircle } from "react-icons/io5";
import { Icon, IconButton, Flex, useDisclosure, Text } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import { GiWallet } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Input, useClipboard } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"; // Import CheckIcon from Chakra UI
import { MdContentCopy } from "react-icons/md";

function Withdrawal() {
  const { isOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClosed,
  } = useDisclosure();

  

  const placeholder = "Your Wallet Address";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  // Function to clear the input field
  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="py-3 flex flex-col gap-4">
      <div
        className="text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5"
        onClick={onSecondOpen}
      >
        <Flex className="gap-4 items-center">
          <Icon as={GiWallet} boxSize={"42px "} color={"#FCA61B"} />
          <Text className="font-medium">Connect Your Wallet</Text>
        </Flex>
        <Icon as={IoAlertCircle} boxSize={7} color={"grey"} />
      </div>
      <Text className="p-[20px] font-bold text-white text-center text-[25px]">
        More opportunities will be available soon
      </Text>
      {/* <div className='text-white font-bold flex bg-dark-green items-center justify-between w-[100%] h-[80px] rounded-xl px-5'>
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
            </div> */}
      {/* Not Connected */}
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="#132E25"
          bgImage={`url(${bg})`}
          bgSize="cover"
          bgPosition="center"
          bgBlendMode="overlay"
          borderTopRadius="25px"
        >
          <DrawerCloseButton color="white" />

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Box className=" flex flex-col items-center justify-center py-3 text-white gap-3">
              <Icon as={GiWallet} boxSize={"80px "} color={"#FCA61B"} />
              <Text className="p-[20px] font-bold text-white text-center text-[25px]">
                Your Wallet hasn't been connected
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Connected */}
      <Drawer isOpen={isSecondOpen} placement="bottom" onClose={onSecondClosed}>
        <DrawerOverlay />
        <DrawerContent
          bg="#132E25"
          bgImage={`url(${bg})`}
          bgSize="cover"
          bgPosition="center"
          bgBlendMode="overlay"
          borderTopRadius="25px"
        >
          <DrawerCloseButton color="white" />

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Box className="flex flex-col items-center justify-center py-3 text-white gap-3 w-[100]">
              <Icon as={GiWallet} boxSize={"80px"} color={"#FCA61B"} />
              <Text className="w-[100%] py-[20px] font-bold text-center text-white text-[35px] flex">
                Your Wallet is connected
              </Text>
              <Text>You can disconnect it or copy wallet address</Text>
              <Box className="flex py-5">
                  <IconButton
                    aria-label="Clear input"
                    icon={<CloseIcon boxSize={6} />} // Using CloseIcon from Chakra UI
                    onClick={handleClear}
                    mr={2}
                    height={'60px'}
                    p={5}
                    _focus={{ boxShadow: 'none', border: "none", outline: "none" }}
                    _active={{ bg: '#7EB43C', border: "none", outline: "none" }}
                    bgColor='#7EB43C'
                    _hover={{ bg: '#7EB43C', border: "none", outline: "none" }}
                    />
                <Flex className="bg-custom-greentxt items-center w-[100%] rounded-lg">
                  <Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    mr={2}
                    height={'60px'}
                    outline="none"
                    boxShadow="none"
                    _focus={{ boxShadow: 'none' }}
                    border="none"
                    color="white"
                    fontSize="20px"
                    _placeholder={{color: 'white', fontSize: '20px'}}
                  />
                  <Button height={'60px'} onClick={onCopy}
                  bg={"transparent"}
                  _focus={{ boxShadow: 'none', border: "none", outline: "none" }}
                  _active={{ bg: 'transparent', border: "none", outline: "none" }}
                  _hover={{ bg: 'transparent', border: "none", outline: "none" }}
                  >
                    {hasCopied ? <CheckIcon boxSize={10} /> : <Icon as={MdContentCopy}  boxSize={10}/>}{" "}
                    {/* Switches between icons */}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Withdrawal;
