// import { useState } from "react";
import Lifestyle from "../components/Lifestyle";
import Technology from "../components/Technology";
import { useRealtimeUserData } from "../hooks/useUserData";
import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";
import cardBg from "../assets/cardBg.png";
import coin from "../assets/coin.png";
import smcoin from "../assets/smcoin.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Business from "../components/Business";
import NavigationBar from "../components/NavigationBar";

interface BoostProps {
  userId: number | undefined;
  name: string | null;
}



const Boost = ({ userId, name }: BoostProps) => {
  const { userData } = useRealtimeUserData(userId, name);


  return (
    <Flex direction={"column"} bgColor={"black"}>
      <Flex
        direction={"column"}
        w={useBreakpointValue({
          base: "100vw",
          md: "78vw",
          lg: "100vw",
        })}
        borderTopRadius={"15px"}
        bgColor={"#FFCC23"}
        overflowX={"hidden"}
        py={2}
        mt={3}
        boxShadow="5px 10px 15px 20px  rgba(255, 204, 35, 0.4)" // Increased opacity and spread
      >
        <Flex
          mt={"1%"}
          borderTopRadius={"4%"}
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
          gap={5}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Image src={coin} alt="coin" />
            <Text fontSize={"40px"} color={"white"}>
              {userData ? new Intl.NumberFormat().format(userData?.coinsEarned.toFixed(0)) : 0}
            </Text>
          </Flex>

          <Flex
            bgColor={"#132E25"}
            justifyContent={"center"}
            borderRadius={"12px"}
            alignItems={"center"}
            gap={3}
            px={"10%"}
          >
            <Text fontWeight={"bold"} fontSize={"small"} color={"#DADADA"}>
              Kw Per Hour
            </Text>
            <Flex alignItems={"center"}>
              <Image src={smcoin} alt="coin" />
              <Text color={"#DADADA"}>
                {userData ? userData?.coinsPerHour : 0}
              </Text>
            </Flex>
          </Flex>

          <Tabs variant="unstyled" px={3} align="center"  >
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
                Trade
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Technology userId={userId} name={name} />
              </TabPanel>
              <TabPanel>
               <Lifestyle userId={userId} name={name} />
              </TabPanel>
               <TabPanel>
                <Business userId={userId} name={name} />
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
