import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"
import { Image } from "@chakra-ui/react"
import smcoin from "../assets/smcoin.png"
import apiClient from "../api-client"
import { EnergySource, Users } from "api-contract"
import { useUserApi } from "../hooks/useUserData"
import { toast } from "react-toastify"

interface TechProps {
  userId: number | undefined
  userData: Users | null
}

export default function Technology({ userId, userData}: TechProps) {
  const { data, isLoading } = apiClient.energy.getAll.useQuery(['energy'])
  const [sortedCards, setSortedCards] = useState<EnergySource[]>([])

  const { purchaseEnergy } = useUserApi()

  useEffect(() => {
    if (data) {
      const sorted = [...data.body].sort((a, b) => a.purchaseCost - b.purchaseCost)
      setSortedCards(sorted)
    }
  }, [data])

  const checkIfEnabled = (index: number) => {
    // const previousCard = sortedCards[index - 1];
    const isAlreadyPurchased = userData?.energySources!!.some((source: EnergySource) => source.type === sortedCards[index].type);
    return isAlreadyPurchased;
  };
  

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 pb-32 mt-4">
      {sortedCards.map((card, index) => {
       return( <TechnologyCard
        userId={userId}
          key={card.type}
          name={card.type}
          perHr={card.productionRate}
          price={card.purchaseCost}
          
          image={smcoin}
          isEnabled={checkIfEnabled(index)}
          unlockingCondition={`Unlock by leveling ${sortedCards[index - 1]?.type} to level 5`}
          purchaseEnergy={purchaseEnergy} // Ensure userId is passed as a number
        />)
})}
    </div>
  )
}

type TechnologyCardProps = {
    userId:number | undefined
  name: string
  perHr: number
  price: number
  image: string
  isEnabled: boolean | undefined
  userData?: Users | null
  unlockingCondition: string
  purchaseEnergy: (userId: number, energyTyope: string)=> void
}
function TechnologyCard({
  userId,
  name,
  perHr,
  price,
  image,
  isEnabled,
  purchaseEnergy,
}: TechnologyCardProps) {
  const [isLoading, setIsLoading] = useState(false);
 

  const handlePurchase = async () => {
    if (userId === undefined) {
      toast.error("User ID is required to purchase an asset.");
      return;
    }

    if (isEnabled) {
      toast.error("This energy source has already been purchased.");
      return;
    }

    setIsLoading(true);
    try {
      await purchaseEnergy(userId, name);
      toast.success("Asset purchased successfully!"); // Mark as purchased after successful purchase
    } catch (error) {
      toast.error("Failed to purchase asset. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative cursor-pointer">
      <div
        className="bg-[#132E25] w-full h-full rounded-xl text-[#E7ECEA] flex flex-col justify-between"
      >
        <div className="px-2 py-1 flex flex-col justify-center items-center relative">
          <p className="text-sm text-center pb-2 border-b-[1px] w-full ">
            {name}
          </p>
          <Image src={image} alt={name} w={'40%'} />
          <p className="font-semibold text-[12px] mt-3">Kw per hour</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={smcoin} alt="coin" />
            <p className="text-#E3E4E4 font-bold text-sm">+{perHr}</p>
          </div>
           {isEnabled && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-sm rounded-xl">
              Purchased
            </div>
          )}
        </div>

        <div
          className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center"
        >
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : (
            <>
              <Image src={smcoin} alt="coin" w={'25%'} />
              <button
                className={`text-#E3E4E4 text-sm px-1 `}
                onClick={handlePurchase}
                disabled={isEnabled}
                
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
