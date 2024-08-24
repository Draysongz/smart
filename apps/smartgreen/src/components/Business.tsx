import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Image } from "@chakra-ui/react";
import smcoin from "../assets/smcoin.png";
import apiClient from "../api-client";
import { useUserApi } from "../hooks/useUserData";
import { Users } from "api-contract";
import { toast } from "react-toastify";
import ferrari from '../assets/upgrades/_0001_ferarri.png'
import bmw from '../assets/upgrades/_0003_bmw.png'
import porche from '../assets/upgrades/_0004_porche.png'
import bugatti from '../assets/upgrades/_0005_bugatti.png'
import smart from '../assets/upgrades/_0006_smart.png'
import royce from '../assets/upgrades/_0007_rolls-royce-.png'
import gclass from '../assets/upgrades/_0008_g-class.png'
import f1 from '../assets/upgrades/_0009_f1.png'
import lambo from '../assets/upgrades/_0010_lambo.png'
import maclaran from '../assets/upgrades/_0011_maclaren.png'
import cyber from '../assets/upgrades/_0012_cyber-truck.png'
import car from '../assets/upgrades/_0013_car-(8).png'
import audi from '../assets/upgrades/_0014_Audi.png'
import mansion from '../assets/upgrades/_0015_mansion.png'
import villa from '../assets/upgrades/_0016_villa-with-pool.png'
import cityvilla from '../assets/upgrades/_0017_city-villa.png'
import tinyhouse from '../assets/upgrades/_0018_tiny-house.png'
import luxury from '../assets/upgrades/_0019_luxary-property.png'
import boat from '../assets/upgrades/_0020_boat.png'
import sailboat from '../assets/upgrades/_0021_sail-boat.png'
import cargoship from '../assets/upgrades/_0022_cargo-ship.png'
import yacht from '../assets/upgrades/_0025_yacht.png'
import luxayyacht from '../assets/upgrades/_0023_luxay-yacht.png'
import cardgold from "../assets/Icons/_0012_Energy.png"
import cardblue from '../assets/upgrades/_0026_card-blue.png'
import cardblack from '../assets/upgrades/_0027_card-black.png'
import cardsilver from '../assets/upgrades/_0028_card-sliver.png'

interface BusinessProps {
  userId: number | undefined;
  userData: Users | null;
}

const assetImages: { [key: string]: string } = {
  // Credit Cards
  "Blue": cardblue,
  "Gold": cardgold,
  "Silver": cardsilver,
  "Black" :cardblack,

  // Cars
  "Smart": smart,
  "BMW 1 Series": bmw,
  "Audi A3": audi,
  "BMW 3 Series": bmw,
  "MB C-Class": cyber,
  "Audi A4": car,
  "BMW 5 Series": royce,
  "MB E-Class": gclass,
  "Audi A6": audi,
  "Lamborghini Temerario": lambo,
  "Lamborghini Revuelto": lambo,
  "Ferrari 296 GTB": ferrari,
  "Ferrari SF90": f1,
  "Ferrari 12 Cilindri": ferrari,
  "Porsche 911 Turbo S": porche,
  "McLaren 720S": maclaran,
  "Bugatti Chiron Supersport": bugatti,

  // Houses
  "Tiny House": tinyhouse,
  "EFH": cityvilla,
  "City Villa": cityvilla,
  "Penthouse": mansion,
  "Villa with Pool": villa,
  "Luxury Property": luxury,

  // Boats
  "Pedal Boat": cargoship,
  "Rowing Boat": boat,
  "Sailboat": sailboat,
  "12m Yacht": yacht,
  "36m Yacht": luxayyacht,
};

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
    if (!acc[card.type]) {
      acc[card.type] = [];
    }
    acc[card.type].push(card);
    // Sort each category by price from lowest to highest
    acc[card.type].sort((a, b) => a.price - b.price);
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
const assetImage = assetImages[name] || smcoin

  return (
    <div className="relative cursor-pointer">
      <div className="bg-[#132E25] w-full h-full rounded-xl text-[#E7ECEA] flex flex-col justify-between">
        <div className="px-2 py-1 flex flex-col justify-center items-center relative">
          <p className="text-sm text-center pb-2 border-b-[1px] w-full">
            {name}
          </p>

          
          {/* <p className="font-semibold text-[12px] mt-3">Kw per hour</p> */}
          <div className="flex items-center gap-1 mt-1">
            <Image src={assetImage} alt="coin" />
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
                className={`text-#E3E4E4 text-sm  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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

