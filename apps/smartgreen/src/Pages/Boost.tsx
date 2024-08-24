// import { useState } from "react";
import Lifestyle from "../components/Lifestyle";
import Technology from "../components/Technology";
import { Flex, useBreakpointValue, Image, Text,  } from "@chakra-ui/react";
import cardBg from "../assets/cardBg.png";
// import coin from "../assets/coin.png";
import windIcon from "../assets/Icons/_0007_Wind.png";
import smcoin from "../assets/smcoin.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Business from "../components/Business";
import NavigationBar from "../components/NavigationBar";
import { Users } from "api-contract";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUserApi } from "../hooks/useUserData";

interface BoostProps {
  userId: number | undefined;
  userData: Users | null;
}

const socket = io("http://localhost:3000");

const Boost = ({ userId, userData }: BoostProps) => {
  const [userDeets, setUserDeets] = useState<Users | null>();
  console.log(userData);
  const breakpoint = useBreakpointValue({
    base: "100vw",
    md: "78vw",
    lg: "100vw",
  });

  const { getOne } = useUserApi();

  useEffect(() => {
    const getUser = async (userId: number) => {
      try {
        const userResponse = await getOne(userId);
        if (userResponse.status === 200) {
          setUserDeets(userResponse.body);
        }
      } catch (error) {}
    };

    getUser(userId!);
  }, []);

  useEffect(() => {
    socket.on("userUpdated", (updatedUser) => {
      setUserDeets(updatedUser);
    });
  }, []);

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
          overflow={"scroll"}
          boxShadow="5px 10px 15px 20px  rgba(255, 204, 35, 0.4)"
          align={"center"}
          paddingTop={"15px"}
          gap={5}
        >
          <div className=" flex justify-center gap-1">
            <Flex
              justifyContent={"center"}
              bgColor={"#132E25"}
              flexDirection={"column"}
              width={"110px"}
              p={"5px"}
              rounded={"10px"}
            >
              <Text color={"white"}>Balance</Text>
              <Flex alignItems={"center"} className="gap-1">
                <Image src={smcoin} alt="coin" w={"30%"} />
                <Text color={"white"}>
                  {userDeets
                    ? new Intl.NumberFormat().format(
                        Number(userDeets!.coinsEarned!)
                      )
                    : 0}
                </Text>
              </Flex>
            </Flex>

            <Flex
              bgColor={"#132E25"}
              justifyContent={"center"}
              flexDirection={"column"}
              width={"110px"}
              p={"5px"}
              rounded={"10px"}
            >
              <Text fontWeight={"bold"} fontSize={"small"} color={"#DADADA"}>
                Kw Per Hour
              </Text>
              <Flex alignItems={"center"} className="gap-1">
                <Image src={smcoin} alt="coin" w={"30%"} />
                <Text color={"#DADADA"}>
                  {userDeets ? userDeets?.coinsPerHour : 0}
                </Text>
              </Flex>
            </Flex>
            <Flex
              bgColor={"#132E25"}
              justifyContent={"center"}
              flexDirection={"column"}
              width={"110px"}
              p={"5px"}
              rounded={"10px"}
            >
              <Text fontWeight={"bold"} fontSize={"small"} color={"#DADADA"}>
                Energy Source
              </Text>
              {userDeets?.energySources &&
                userDeets.energySources.length > 0 && (
                  <Flex alignItems={"center"} className="gap-1">
                    <Image
                      src={windIcon} // Display the latest energy source
                      alt={
                        userDeets.energySources[
                          userDeets.energySources.length - 1
                        ].type
                      }
                      width="30px"
                      height="30px"
                    />
                    <Text className="text-white">
                      {
                        userDeets.energySources[
                          userDeets.energySources.length - 1
                        ].type
                      }
                    </Text>
                  </Flex>
                )}
            </Flex>
          </div>
          <Tabs variant="unstyled" px={3} align="center">
            <TabList bgColor={"#132E25"} p={1} borderRadius={"12px"}>
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
                <Technology userId={userId} userData={userDeets!} />
              </TabPanel>
              <TabPanel>
                <Lifestyle userId={userId} userData={userDeets!} />
              </TabPanel>
              <TabPanel>
                <Business userId={userId} userData={userDeets!} />
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
