import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Image } from "@chakra-ui/react";
import smcoin from "../assets/smcoin.png";
import { useUserApi } from "../hooks/useUserData";
import apiClient from "../api-client";
import { Users } from "api-contract";

interface LifestyleProps {
  userId: number | undefined;
  userData: Users | null;
}

export default function Lifestyle({ userId, userData }: LifestyleProps) {
  const { data, isLoading } = apiClient.country.getAll.useQuery(['country'])
  const { purchaseLicense } = useUserApi();

  const cards = data?.body || [];

  let totalLicenseFee = 0;


  if (userData?.energySources && userData.energySources.length > 0) {
    console.log(userData.energySources)
    for (const energySource of userData.energySources) {
        console.log(energySource.licenseFee)
      totalLicenseFee += energySource.licenseFee;
    }
  }

  const userCountries = userData?.country || [];

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 mt-4 pb-32">
       {cards.map((card, index) => {
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
  image,
}: PropType) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (userId) {
      await purchaseLicense(userId, name);
    }
  };

  return (
    <div className={"relative cursor-pointer"}>
      <div className="bg-[#132E25] w-full h-full rounded-xl text-[#E7ECEA] flex flex-col justify-between">
        <div className="px-2 py-1 flex flex-col justify-center items-center relative">
          <p className="text-sm text-center pb-2 border-b-[1px] w-full">
            {name}
          </p>
          <Image src={image} alt="coin" w={"35%"} />
          <p className="font-semibold text-[12px] mt-3">License</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={smcoin} alt="coin" />
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
