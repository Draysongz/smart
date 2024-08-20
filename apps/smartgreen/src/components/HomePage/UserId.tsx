import { useState, useEffect } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import contactIcon from "../../assets/contact 1.png";
import coin from "../../assets/coin.png";
import bolt from "../../assets/BOLT 1.png";
import fanBlade from "../../assets/FAN blade 1.png";
import fanStand from "../../assets/Fan Stand.png";
import NavigationBar from "../NavigationBar";
import bg from "../../assets/bg.png";
import smcoin from "../../assets/smcoin.png";
import spaceship from '../../assets/spaceship.svg';
import { useStaticUserData } from "../../hooks/useUserData";
import { updateUserData } from "../../helper-functions/getUser";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

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

const UserId = ({ userId, name }: { userId: number | undefined; name: string | null; }) => {
  const [floatingEnergy, setFloatingEnergy] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [tappingEnergy, setTappingEnergy] = useState(0);
  const [tappingPower, setTappingPower] = useState(0);
  const [params] = useSearchParams();
  const [rotateAnim, setRotateAnim] = useState("");
  const [coinsPerHour, setCoinsPerHour] = useState(0);
  const [fanBladeAnim, setFanBladeAnim] = useState(""); // State for fan blade animation

  const referralId = Number(params.get("referralId"));
  const { userData } = useStaticUserData(userId, name, referralId);

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

    

    await updateUserData(userId, {
      coinsEarned: coinsEarned + tappingPower,
      floatingTapEnergy: floatingEnergy - tappingPower,
    });
  };

  const removeScreen = (id: number) => {
    setScreenAxis(screenAxis.filter(screen => screen.id !== id));
  };

  const calculateLostTime = (): number => {
    const lastUpdate = userData?.lastUpdatedTime;
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
      await updateUserData(userId, {
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
        <div className="border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow max-h-700:border-t-custom-top">
          <Box
            className="w-full h-[80vh] border-t-transparent rounded-t-3xl bg-custom-greenbg bg-cover bg-center py-9 max-h-700:flex max-h-700:flex-col max-h-700:gap-4"
            backgroundImage={bg}
          >
            <div className="w-full flex gap-4 text-center justify-center items-center max-h-700:gap-2 max-h-700:px-2">
              <div className="w-custom-sm h-24 max-h-700:h-20 bg-dark-green flex flex-col justify-center items-center gap-2 rounded-2xl">
                <p className="bg-custom-greentxt py-2 rounded-3xl w-custom-tiny text-sm">
                  Power
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={smcoin} alt="" />
                  <p>{tappingPower}</p>
                </span>
              </div>
              <div className="w-custom-sm h-24 bg-dark-green flex flex-col justify-center items-center gap-2 rounded-2xl max-h-700:h-20">
                <p className="bg-custom-greentxt py-2 rounded-3xl w-custom-tiny text-sm">
                  kw per Hour
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={smcoin} alt="" />
                  <p>{coinsPerHour}</p>
                </span>
              </div>
              <div className="w-custom-sm h-24 max-h-700:h-20 bg-dark-green flex flex-col justify-center items-center gap-4 rounded-2xl">
                <p className="bg-custom-greentxt py-2 rounded-3xl w-custom-tiny text-sm">
                  Energy
                </p>
                <span className="flex gap-2 max-h-700:gap-0 text-white items-center">
                  <img src={bolt} alt="" className="w-6" />
                  <p>
                    {floatingEnergy}/{tappingEnergy}
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
            <div className="w-full flex justify-center py-6 max-h-700:py-2 ">
              <span className="bg-custom-goldyellow w-10/12 h-3 rounded-2xl max-h-700:h-1 "></span>
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
                className="flex flex-col rounded-full justify-center border-custom-large-top border-custom-yellow items-center bg-custom-radial max-h-700:border-custom-top max-h-700:w-[220px] max-h-700:h-[220px]"
              >
                <img
                  src={fanBlade}
                  alt="Fan Blade"
                  className={`w-[80%] mt-[10px] ml-[33px] max-h-700:w-[60%] max-h-700:h-[180px] max-h-700:mb-[-5px] max-h-700:ml-[22px]`}
                  style={{
                    animation: `${fanBladeAnim} 2s ease`
                  }}
                  onAnimationEnd={() => setFanBladeAnim("")}
                />
                <img
                  src={fanStand}
                  alt=""
                  className="w-[80%] mt-[-225px] mb-[-13px] h-[270px] max-h-700:w-[70%] max-h-700:h-[240px] max-h-700:mt-[-200px]"
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
            <Link to={"/powerUps"}>
            <div className="flex gap-3 justify-end px-5 items-center">
            <img src={spaceship} alt=""className=' w-8' />
            <p className="text-white font-semibold text-[18px]">
              Boost
            </p>
            </div>
            </Link>
          </Box>
        </div>
      </div>
      <NavigationBar />
    </section>
  );
};

export default UserId;
