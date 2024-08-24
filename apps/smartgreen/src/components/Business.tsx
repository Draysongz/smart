import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Image } from "@chakra-ui/react";
import smcoin from "../assets/smcoin.png";
import apiClient from "../api-client";
import { useUserApi } from "../hooks/useUserData";
import { Users } from "api-contract";
import { toast } from "react-toastify";

interface BusinessProps {
  userId: number | undefined;
  userData: Users | null;
}

export default function Business({ userId, userData }: BusinessProps) {
  const { data, isLoading } = apiClient.asset.getAll.useQuery(['assets']);
  const { purchaseAsset } = useUserApi();
  const cards = data?.body || [];

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    );
  }

  // Group assets by type
  const assetsByType = cards.reduce((acc, card) => {
    (acc[card.type] = acc[card.type] || []).push(card);
    return acc;
  }, {} as Record<string, typeof cards>);

  return (
    <div className="mt-4 pb-32">
      {Object.keys(assetsByType).map((type) => (
        <div key={type} className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-white">{type}</h2>
          <div className="grid grid-cols-3 gap-2">
            {assetsByType[type].map((card) => (
              <BusinessCard
                key={card.name}
                name={card.name}
                price={card.price}
                levelRequirement={card.levelRequirement}
                purchaseAsset={purchaseAsset}
                userId={userId}
                userLevel={userData?.userLevel!} // Assuming userData has a level property
                isAlreadyPurchased={userData?.assets?.some(asset => asset.name === card.name) || false}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

type PropType = {
  name: string;
  price: number;
  levelRequirement: number;
  purchaseAsset: (name: string, userId: number) => void;
  userId: number | undefined;
  userLevel: number;
  isAlreadyPurchased: boolean;
};

function BusinessCard({ name, price, levelRequirement, purchaseAsset, userId, userLevel, isAlreadyPurchased }: PropType) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    if (userId === undefined) {
      alert("User ID is required to purchase an asset.");
      return;
    }

    if (userLevel < levelRequirement) {
      alert("You do not meet the level requirement to purchase this asset.");
      return;
    }

    setIsLoading(true);
    try {
      await purchaseAsset(name, userId);
      toast.success("Asset purchased successfully!");
    } catch (error) {
      toast.success("Failed to purchase asset. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

const isDisabled = userLevel < levelRequirement || isAlreadyPurchased;


  return (
    <div className="relative cursor-pointer">
      <div className="bg-[#132E25] w-full h-full rounded-xl text-[#E7ECEA] flex flex-col justify-between">
        <div className="px-2 py-1 flex flex-col justify-center items-center relative">
          <p className="text-sm text-center pb-2 border-b-[1px] w-full">
            {name}
          </p>

          <Image src={smcoin} alt="coin" w={"40%"} />
          <p className="font-semibold text-[12px] mt-3">Kw per hour</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={smcoin} alt="coin" />
          </div>

        {isDisabled && (
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-sm rounded-xl">
        {isAlreadyPurchased 
          ? "Already Purchased" :
          userLevel < levelRequirement ? `Level ${levelRequirement} required`: ""}
      </div>
    )}
        </div>

        <div className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center">
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : (
            <>
              <Image src={smcoin} alt="coin" w={'25%'} />
              <button
                className={`text-#E3E4E4 text-sm px-1 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePurchase}
                disabled={isDisabled}
              >
                {new Intl.NumberFormat().format(price)}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

