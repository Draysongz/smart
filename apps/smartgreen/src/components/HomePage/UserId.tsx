import { useState, useEffect } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import contactIcon from "../../assets/contact 1.png";
import coin from "../../assets/coin.png";
import power from "../../assets/_0010_Power.png"
import bolt from "../../assets/kwph.png";
import fanBlade from "../../assets/FAN blade 1.png";
import fanStand from "../../assets/Fan Stand.png";
import fanSpinning from "../../assets/set-fan.gif"
import NavigationBar from "../NavigationBar";
import ProgressBar from "../ProgressBar"
import bg from "../../assets/bg.png";
import windIcon from "../../assets/Icons/_0007_Wind.png"
import spaceship from '../../assets/spaceship.svg';
import { Link } from "react-router-dom";
import { Users } from "api-contract";
import { useUserApi } from "../../hooks/useUserData";

const floatUpAndFadeOut = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const rotateFanBlade = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const rotateCoinLeft = keyframes`
  0% {
    transform: rotateY(0deg)
  }
  100% {
    transform: rotateY(20deg)
  }
`;

const rotateCoinRight = keyframes`
  0% {
    transform: rotateY(0deg)
  }
  100% {
    transform: rotateY(-20deg)
  }
`;

const UserId = ({ userId, name, userData  }: { userId: number ; name: string | null; userData: Users | null }) => {
  const [floatingEnergy, setFloatingEnergy] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [tappingEnergy, setTappingEnergy] = useState(0);
  const [tappingPower, setTappingPower] = useState(0);
  const [rotateAnim, setRotateAnim] = useState("");
  const [coinsPerHour, setCoinsPerHour] = useState(0);
  const [fanBladeAnim, setFanBladeAnim] = useState(""); // State for fan blade animation




const {updateUserData} = useUserApi()

  


  const [screenAxis, setScreenAxis] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleTap = async (clientX: number, clientY: number) => {
    if (!userId) return;
    if (floatingEnergy - tappingPower <= 0) return;

    setFloatingEnergy(curr => curr - tappingPower);
    setCoinsEarned(coins => coins + tappingPower);
    setScreenAxis(prv => [...prv, { x: clientX, y: clientY, id: Date.now() }]);

    if (clientX < 170) {
      setRotateAnim(() => rotateCoinLeft);
    } else if (clientX > 230) {
      setRotateAnim(() => rotateCoinRight);
    }

    

    updateUserData(userId, {
      coinsEarned: coinsEarned + tappingPower,
      floatingTapEnergy: floatingEnergy - tappingPower,
    });
  };

  const removeScreen = (id: number) => {
    setScreenAxis(screenAxis.filter(screen => screen.id !== id));
  };

const calculateLostTime = (): number => {
  const lastUpdate = userData?.lastUpdatedTime ?? 0; // Default to 0 if undefined
  const timeNowInSeconds = Date.now() / 1000;
  return timeNowInSeconds - lastUpdate;
};


  useEffect(() => {
    if (!userData) return;
    const timeLost = calculateLostTime();
    setCoinsEarned(() => userData.coinsEarned);
    setTappingEnergy(() => userData.tapEnergy);
    setCoinsPerHour(() => userData.coinsPerHour);
    const energyPerSec = userData.refillEnergy / userData.refillTime;
    const energyLost: number =
      userData.floatingTapEnergy + energyPerSec * timeLost;
    if (timeLost >= 3) {
      if (Number(energyLost.toFixed(0)) >= userData.tapEnergy) {
        setFloatingEnergy(() => userData.tapEnergy);
      } else {
        setFloatingEnergy(() => Number(energyLost.toFixed(0)));
      }
    } else {
      setFloatingEnergy(() => userData.floatingTapEnergy);
    }
    setTappingPower(() => userData.tapPower);
    return () => {};
  }, [userData]);

  useEffect(() => {
    if (!userData) return;
    setInterval(() => {
      setFloatingEnergy(curr => {
        if (curr + userData.refillEnergy >= userData.tapEnergy)
          return userData.tapEnergy;
        return curr + userData.refillEnergy;
      });
    }, 3000);
    return () => {};
  }, [userData]);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      updateUserData(userId, {
        floatingTapEnergy: floatingEnergy,
        lastUpdatedTime: Date.now() / 1000,
      });
    })();
    return () => {};
  }, [floatingEnergy, userId]);

  useEffect(() => {
    if (!userData) return;

    const lostTime = calculateLostTime();
    const pointsPerSecond = userData.coinsPerHour / 3600;
    const additionalCoins = lostTime * pointsPerSecond;

    setCoinsEarned(userData.coinsEarned + additionalCoins);

    const interval = setInterval(async () => {
      if (!userId) return;
      setCoinsEarned(prevPoints => {
        const newBalance = prevPoints + pointsPerSecond;

        updateUserData(userId, {
          coinsEarned: newBalance,
          lastUpdatedTime: Date.now() / 1000,
        });

        return newBalance;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [userData, userId]);

  return !userData ? (
    <Flex
      height="100vh"
      justify="center"
      w={"100vw"}
      direction={"column"}
      overflow={"hidden"}
      align="center"
    >
      <Spinner color="gray.500" />
    </Flex>
  ) : (
    <section className="w-screen flex justify-center max-w-screen-sm">
      <div className="bg-black flex flex-col w-full pt-[15px]">
        <div className="w-full flex items-center gap-4 pl-[20px] h-[10vh]">
          <img src={contactIcon} alt="" />
          <p className="text-white">Welcome {name}</p>
        </div>
        <ProgressBar />
        <div className="border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow max-h-700:border-t-custom-top h-[100%]">
          <Box
            className="w-full border-t-transparent rounded-t-3xl bg-custom-greenbg bg-cover bg-center py-9 flex flex-col gap-5 flex-grow max-h-700:p-3"
            backgroundImage={bg}
          >
            <div className="w-full flex gap-4 text-center justify-center items-center max-h-700:gap-2 max-h-700:px-2">
              <div className="w-custom-sm h-24 bg-dark-green flex flex-col justify-center items-center gap-2 rounded-2xl">
                <p className="bg-custom-greentxt py-2 rounded-xl w-[95%] text-sm">
                  Power
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={power} alt="" className="w-[30px]"/>
                  <p>{tappingPower}</p>
                </span>
              </div>
              <div className="w-custom-sm h-24 bg-dark-green flex flex-col justify-center items-center gap-4 rounded-2xl">
                <p className="bg-custom-greentxt py-2 rounded-xl w-[95%] text-sm">
                  kw per Hour
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={bolt} alt="" className="w-[12px]" />
                  <p>{coinsPerHour}</p>
                </span>
              </div>
              <div className="w-custom-sm h-24 bg-dark-green flex flex-col justify-center items-center gap-4 rounded-2xl">
                <p className="bg-custom-greentxt py-2 rounded-xl w-[95%] text-sm">
                  Energy Source
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={windIcon} alt="" className="w-[20px]" />
                  <p>
                    Wind
                  </p>
                </span>
              </div>
            </div>
            <div className="text-white flex gap-4 items-center justify-center font-bold text-5xl py-6 max-h-700:h-10">
              <img src={coin} alt="" className="w-16" />
              <p className="max-h-700:text-3xl">
                {new Intl.NumberFormat().format(Number(coinsEarned.toFixed(0)))}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Box
                bg={"rgba(0,0,0,0)"}
                rounded={"full"}
                h={"10%"}
                w={"100%"}
                pos={"absolute"}
                zIndex={"10"}
              ></Box>
              <div
                onTouchStart={async (e) =>
                  await handleTap(e.touches[0].clientX, e.touches[0].clientY) 
                }
                onClick={()=>{
                  setFanBladeAnim(() => rotateFanBlade);
                }}
                style={{
                  animation: `${rotateAnim} 0.1s ease`,
                }}
                onAnimationEnd={() => setRotateAnim("")}
                className="w-[300px] h-[300px] flex flex-col rounded-full justify-center border-custom-large-top border-custom-yellow items-center bg-custom-radial max-h-700:border-custom-top max-h-700:w-[220px] max-h-700:h-[220px]"
              >
                <img
                  src={fanBlade}
                  alt="Fan Blade"
                  className={`w-[80%] mt-[10px] ml-[33px] max-h-700:w-[60%] max-h-700:h-[180px] max-h-700:mb-[-5px] max-h-700:ml-[22px] hidden`}
                  style={{
                    animation: `${fanBladeAnim} 2s ease`
                  }}
                  onAnimationEnd={() => setFanBladeAnim("")}
                />
                <img src={fanSpinning} alt="" className={`max-h-700:w-[100%] max-h-700:h-[200px] max-h-700:mb-[-5px]`} />
                <img
                  src={fanStand}
                  alt=""
                  className="w-[80%] mt-[-250px] mb-[-13px] h-[260px] max-h-700:w-[70%] max-h-700:h-[230px] max-h-700:mt-[-210px]"
                />
              </div>
              {screenAxis.map(screen => (
                <Text
                  key={screen.id}
                  position={"absolute"}
                  left={`${screen.x - 10}px`}
                  top={`${screen.y}px`}
                  color={"white"}
                  as={"p"}
                  animation={`${floatUpAndFadeOut} 1s ease forwards`}
                  onAnimationEnd={() => removeScreen(screen.id)}
                  zIndex={"5"}
                  fontSize={"30px"}
                >
                  +{tappingPower}
                </Text>
              ))}
            </div>
            <div className=" flex items-center justify-between mt-5 max-h-700:mt-2 px-5">
            <span className="flex gap-2 text-white items-center">
                  <img src={bolt} alt="" className="w-6" />
                  <p className="font-semibold">
                    {floatingEnergy}/{tappingEnergy}
                  </p>
                </span>
            <Link to={"/powerUps"}>
            <div className="flex gap-2 items-center mr-2">
            <img src={spaceship} alt=""className=' w-8' />
            <p className="text-white font-semibold text-[18px]">
              Boost
            </p>
            </div>
            </Link>
            </div>
          </Box>
        </div>
      </div>
      <NavigationBar />
    </section>
  );
};

export default UserId;
