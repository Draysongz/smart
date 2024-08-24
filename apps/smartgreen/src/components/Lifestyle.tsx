import { useState, useEffect} from "react";
import { ClipLoader } from "react-spinners";
import { Image } from "@chakra-ui/react";
import smcoin from "../assets/smcoin.png";
import { useUserApi } from "../hooks/useUserData";
import apiClient from "../api-client";
import { County, Users } from "api-contract";
import germany from '../assets/Icons/_0002_germany.png'
import crypus from "../assets/icons/_0001_Cyprus.png"
import morocco from '../assets/Icons/_0003_morocco.png'
import brazil from '../assets/Icons/_0000_brazil.png'

interface LifestyleProps {
  userId: number | undefined;
  userData: Users | null;
}
const assetImages: { [key: string]: string } = {

  "Germany": germany,
    "Cyprus": crypus, 
    "Morocco": morocco,
    "Brazil": brazil,
    "USA": "",
    "Japan": ""

}

export default function Lifestyle({ userId, userData }: LifestyleProps) {
  const { data, isLoading } = apiClient.country.getAll.useQuery(['country'])
  const { purchaseLicense } = useUserApi();
    const [sortedCards, setSortedCards] = useState<County[]>([]);


  let totalLicenseFee = 0;

    const distanceFromGermany: Record<string, number> = {
    "Germany": 0,
    "Cyprus": 2850, 
    "Morocco": 2600,
    "Brazil": 9800,
    "USA": 6500,
    "Japan": 8900
  
  };




  if (userData?.energySources && userData.energySources.length > 0) {
    console.log(userData.energySources)
    for (const energySource of userData.energySources) {
        console.log(energySource.licenseFee)
      totalLicenseFee += energySource.licenseFee;
    }
  }

  const userCountries = userData?.country || [];
  useEffect(() => {
    if (data) {
      const sorted = [...data.body].sort((a, b) => {
        if (a.name === "Germany") return -1;
        if (b.name === "Germany") return 1;

        const distanceA = distanceFromGermany[a.name] || Infinity;
        const distanceB = distanceFromGermany[b.name] || Infinity;
        return distanceA - distanceB;
      });
      setSortedCards(sorted);
    }
  }, [data]);



  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 mt-4 pb-32">
       {sortedCards.map((card, index) => {
        // Find the status of the current country in the user's data
        const userCountry = userCountries.find(c => c.name === card.name);
        const status = userCountry?.status || 'unlicensed';

        return (
          <LifestyleCard
            key={index}
            name={card.name}
            status={status}
            purchaseLicense={purchaseLicense}
            cost={totalLicenseFee}  // Use the total license fee for the cost
            userId={userId}
            image={smcoin}
          />
        );
      })}
    </div>
  );
}

type PropType = {
  name: string;
  status: string;
  purchaseLicense: (userId: number, countryName: string) => void;
  cost: number;
  userId: number | undefined;
  image: string;
};

function LifestyleCard({
  name,
  status,
  purchaseLicense,
  cost,
  userId,
}: PropType) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (userId) {
      await purchaseLicense(userId, name);
    }
  };
  const assetImage = assetImages[name] || smcoin

  return (
    <div className={"relative cursor-pointer"}>
      <div className="bg-[#132E25] w-full h-full rounded-xl text-[#E7ECEA] flex flex-col justify-between">
        <div className="px-2 py-1 flex flex-col justify-center items-center relative">
          <p className="text-sm text-center pb-2 border-b-[1px] w-full">
            {name}
          </p>
          <Image src={assetImage} alt="coin"  />
          <p className="font-semibold text-[12px] mt-3">License</p>
          <div className="flex items-center gap-1 mt-1">
            {/* <Image src={assetImage} alt="coin" /> */}
          </div>

          {status === "licensed" && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-sm rounded-xl">
              License acquired
            </div>
          )}
        </div>

        <div
          className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center gap-2"
          onClick={async () => {
            if (status !== "licensed") {
              setIsLoading(true);
              await onClick();
              setIsLoading(false);
            }
          }}
        >
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : (
            <>
              <Image src={smcoin} alt="coin" w={'25%'} />
              <button
                className="text-#E3E4E4 text-sm"
                disabled={status === "licensed"}
              >
                {status === "licensed" ? "Licensed" : `${cost} `}
              </button>
            </>
          )}
        </div>
      </div>
   
    </div>
  );
}
