// import { useState } from "react";
import Lifestyle from "../components/Lifestyle";
import Technology from "../components/Technology";
import { Flex, useBreakpointValue, Image, Text, Box } from "@chakra-ui/react";
import fanBlade from "../assets/FAN blade 1.png"
import fanStand from "../assets/Fan Stand.png";
import fanSpinning from "../assets/set-fan.gif"
import cardBg from "../assets/cardBg.png";
// import coin from "../assets/coin.png";
import windIcon from "../assets/Icons/_0007_Wind.png"
import smcoin from "../assets/smcoin.png";
import { 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel 
} from "@chakra-ui/react";
import Business from "../components/Business";
import NavigationBar from "../components/NavigationBar";
import { Users } from "api-contract";




interface BoostProps {
  userId: number | undefined;
  userData: Users | null
}



const Boost = ({ userId, userData }: BoostProps) => {
 
  const breakpoint = useBreakpointValue({ base: "100vw", md: "78vw", lg: "100vw" });



  return (
    <Flex direction={"column"} bgColor={"black"}>
      <Flex
        direction={"column"}
        w={breakpoint}
        borderTopRadius={"15px"}
        bgColor={"#FFCC23"}
        overflowX={"hidden"}
        py={2}
        mt={3}
        boxShadow="5px 10px 15px 20px  rgba(255, 204, 35, 0.4)" // Increased opacity and spread
      >
        <Box className="w-full justify-center items-center z-10 fixed bg-[#FFCC23] py-2">
              <div
                className="flex flex-col rounded-full justify-center border-custom-yellow items-center bg-custom-radial border-custom-top w-[220px] h-[220px] relative"
              >
                <img
                  src={fanBlade}
                  alt="Fan Blade"
                  className={`w-[80%] mt-[10px] ml-[33px] max-h-700:w-[60%] max-h-700:h-[180px] max-h-700:mb-[-5px] max-h-700:ml-[22px] hidden`}
                  
                />
                <img src={fanSpinning} alt="" className={`max-h-700:w-[100%] max-h-700:h-[200px] max-h-700:mb-[-5px]`} />
                <img
                  src={fanStand}
                  alt=""
                  className="w-[80%] mt-[-250px] mb-[-13px] h-[260px] max-h-700:w-[70%] max-h-700:h-[230px] max-h-700:mt-[-210px]"
                />
              </div>
              <div className=" absolute top-[5%] right-5 flex flex-col gap-1">
              <Flex justifyContent={"center"} bgColor={'#132E25'} flexDirection={'column'} width={'120px'} p={'5px'}
              rounded={'10px'}>
              <Text color={"white"}>
                Balance
              </Text>
              <Flex alignItems={"center"} className="gap-1">
              <Image src={smcoin} alt="coin" w={'30%'} />
              <Text color={"white"}>
                {userData ? new Intl.NumberFormat().format(Number(userData?.coinsEarned.toFixed(0))) : 0}
              </Text>
              </Flex>
          </Flex>

          <Flex
            bgColor={"#132E25"}
            justifyContent={"center"}
            flexDirection={'column'}
            width={'120px'} 
            p={'5px'}
            rounded={'10px'}
          >
            <Text fontWeight={"bold"} fontSize={"small"} color={"#DADADA"}>
              Kw Per Hour
            </Text>
            <Flex alignItems={"center"} className="gap-1">
              <Image src={smcoin} alt="coin" w={'30%'} />
              <Text color={"#DADADA"}>
                {userData ? userData?.coinsPerHour : 0}
              </Text>
            </Flex>
          </Flex>
          <Flex
            bgColor={"#132E25"}
            justifyContent={"center"}
            flexDirection={'column'}
            width={'120px'} p={'5px'}
            rounded={'10px'}
          >
            <Text fontWeight={"bold"} fontSize={"small"} color={"#DADADA"}>
              Energy Source
            </Text>
            <Flex alignItems={"center"} className="gap-1">
              <Image src={windIcon} alt="coin" w={'30px'} />
              <Text color={"#DADADA"}>
                Wind
              </Text>
            </Flex>
          </Flex>
              </div>

            </Box>
        <Flex
          mt={"1%"}
          borderTopRadius={"20px"}
          direction={"column"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          w={"100%"}
          bgImage={cardBg}
          bgColor={"#0C472C"}
          h={"97vh"}
          overflow={'scroll'}
          boxShadow="5px 10px 15px 20px  rgba(255, 204, 35, 0.4)"
          align={"center"}
          paddingTop={"15px"}
          gap={5}
          position={'relative'}
          top={"250px"}
          zIndex={'0'}
        >

          <Tabs variant="unstyled" px={3} align="center">
            <TabList bgColor={"#132E25"} p={1} borderRadius={"12px"} >
              <Tab
                color={"#E7ECEA"}
                _selected={{
                  color: "black",
                  bg: "#FFCC23",
                  outline: "none",
                  border: "none",
                }}
              >
                Technology
              </Tab>
              <Tab
                color={"#E7ECEA"}
                _selected={{
                  color: "black",
                  bg: "#FFCC23",
                  outline: "none",
                  border: "none",
                }}
              >
                Business
              </Tab>
              <Tab
                color={"#E7ECEA"}
                _selected={{
                  color: "black",
                  bg: "#FFCC23",
                  outline: "none",
                  border: "none",
                }}
              >
               Assets
              </Tab>
            </TabList>
            <TabPanels>
               <TabPanel>
                <Technology userId={userId}  />
              </TabPanel>
              <TabPanel>
               <Lifestyle userId={userId} userData={userData}/>
              </TabPanel>
               <TabPanel>
                <Business userId={userId} userData={userData} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        <NavigationBar />
      </Flex>
    </Flex>
  );
};

export default Boost;
