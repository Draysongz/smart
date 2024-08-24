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
// import windIcon from "../../assets/Icons/_0007_Wind.png"
import spaceship from '../../assets/spaceship.svg';
import { Link } from "react-router-dom";
import { EnergySource, Users } from "api-contract";
import { useUserApi } from "../../hooks/useUserData";
import {io} from 'socket.io-client'

const socket = io('http://localhost:3000');
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

const levelMinPoints = [5000000, 15000000, 250000000, 50000000, 100000000, 200000000];
const levels = ["Spark Initiate", "Current Conductor", "Power Pioneer", "Voltage Vanguard", "Energy Elite", "Quantum Master"];

const UserId = ({ userId, name, userDeets }: { userId: number ; name: string | null; userDeets: Users | null }) => {
  const [floatingEnergy, setFloatingEnergy] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [tappingEnergy, setTappingEnergy] = useState(0);
  const [tappingPower, setTappingPower] = useState(0);
  const [rotateAnim, setRotateAnim] = useState("");
  const [coinsPerHour, setCoinsPerHour] = useState(0);
  const [fanBladeAnim, setFanBladeAnim] = useState(""); // State for fan blade animation
  const [accumulatedEnergy, setAccumulatedEnergy] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [totalEnergyProductionRate, setTotalEnergyProductionRate] = useState(0);
  const [userData, setUserData] = useState<Users | null>()
  console.log(userDeets)

  const {updateUserData, getOne} = useUserApi()

  useEffect(() => {
    const getUser = async (userId : number) => {
      try {
        const userResponse = await getOne(userId);
       if(userResponse.status === 200){
        setUserData(userResponse.body)
       }
      } catch (error) {}
    };

    getUser(userId!)
  }, []);

   useEffect(()=>{
    socket.on("userUpdated", (updatedUser)=>{
     const coins = updatedUser?.coinsEarned - coinsEarned
     if(coins >= 0){
      let coined = coinsEarned + coins
      setInterval(()=>setCoinsEarned(coined), 100000)
     }
      
    })
  }, [])




  useEffect(() => {
    if (userData) {
      setAccumulatedEnergy(userData.energyGenerated!);
      setLastUpdateTime(userData.energyTimestamp || Date.now());
    }
  }, [userData]);

  useEffect(() => {
  if (userData && userData.energySources) {
    const productionRate = calculateProductionRate(userData.energySources);
    setTotalEnergyProductionRate(productionRate);
  }
}, [userData]);

  const calculateProductionRate = (energySources: EnergySource[]) => {
  if (energySources.length === 0) return 0;

  if (energySources.length === 1) {
    return energySources[0].productionRate; // Return the rate of the single energy source
  }

  // Sum the production rates of all energy sources
  return energySources.reduce((total, source) => total + source.productionRate, 0);
};

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeElapsed = (now - lastUpdateTime) / 3600000; // Convert milliseconds to hours

      if (timeElapsed > 0) {
        const newEnergy = accumulatedEnergy + (timeElapsed * totalEnergyProductionRate);
        setAccumulatedEnergy(newEnergy);
        setLastUpdateTime(now);
        updateUserData(userId, {
          energyGenerated: newEnergy,
          energyTimestamp: lastUpdateTime
        })
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [totalEnergyProductionRate, accumulatedEnergy, lastUpdateTime]);





  


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

  useEffect(()=>{
    console.log(coinsEarned)
  }, [coinsEarned])

useEffect(() => {
  if (!userData) return;
  setInterval(() => {
    setFloatingEnergy(curr => {
      if (curr + userData.refillEnergy >= userData.tapEnergy)
        return userData.tapEnergy;
      return curr + userData.refillEnergy;
    });
  }, 3000);


}, [userData]);
 


  useEffect(() => {
    if (!userId) return;
    (async () => {
      updateUserData(userId, {
        floatingTapEnergy: floatingEnergy,
        lastUpdatedTime: Date.now() / 1000,
      });
    })();
  }, [floatingEnergy, userId]);

  return userDeets === null  ? (
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
    <section className="w-screen flex justify-center max-w-screen-sm min-h-full">
      <div className="bg-black flex flex-col w-full pt-[15px]">
        <div className="w-full flex items-center gap-4 pl-[20px] h-[10vh]">
          <img src={contactIcon} alt="" />
          <p className="text-white">Welcome {name}</p>
        </div>
        <ProgressBar levels={levels} userData={userDeets!} levelMinPoints={levelMinPoints}  />
        <div className="border-t-custom-large-top rounded-t-3xl border-t-custom-yellow w-full items-center bg-custom-goldyellow max-h-700:border-t-custom-top h-[100%]">
          <Box
            className="w-screen border-t-transparent rounded-t-3xl bg-custom-greenbg bg-cover bg-center flex flex-col  min-h-[80vh]  justify-between pb-16 pt-10"
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
                  Energy
                </p>
                <span className="flex gap-2 text-white items-center">
                  <img src={bolt} alt="" className="w-[12px]" />
                  <p>
                    {accumulatedEnergy ?new Intl.NumberFormat().format(Number(accumulatedEnergy.toFixed(2)))!: 0}
                  </p>
                </span>
              </div>
            </div>
            <div className="text-white flex gap-4 items-center justify-center font-bold text-5xl max-h-700:h-10">
              <img src={coin} alt="" className="w-16" />
              <p className="max-h-700:text-3xl">
                {coinsEarned ? new Intl.NumberFormat().format(Number(coinsEarned.toFixed(0)))! : 0}
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
                className="w-[260px] h-[260px] flex flex-col rounded-full justify-center border-custom-top border-custom-yellow items-center bg-custom-radial max-h-700:border-custom-top max-h-600:w-[220px] max-h-600:h-[220px]"
              >
                <img
                  src={fanBlade}
                  alt="Fan Blade"
                  className={`w-[80%] mt-[10px] ml-[33px] max-h-600:w-[60%] max-h-600:h-[180px] max-h-600:mb-[-5px] max-h-600:ml-[22px] hidden`}
                  style={{
                    animation: `${fanBladeAnim} 2s ease`
                  }}
                  onAnimationEnd={() => setFanBladeAnim("")}
                />
                <img src={fanSpinning} alt="" className={`max-h-600:w-[100%] max-h-600:h-[200px] max-h-600:mb-[-5px] z-[1]`} />
                <img
                  src={fanStand}
                  alt=""
                  className="w-[80%] mt-[-250px] mb-[-13px] h-[260px] max-h-600:w-[70%] max-h-600:h-[230px] max-h-600:mt-[-210px] z-[0]"
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
            <div className=" flex items-center justify-between  px-5">
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
