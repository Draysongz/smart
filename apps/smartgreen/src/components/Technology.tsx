import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"
import { Image } from "@chakra-ui/react"
import smcoin from "../assets/smcoin.png"
import apiClient from "../api-client"
import { EnergySource } from "api-contract"
import { useUserApi } from "../hooks/useUserData"

interface TechProps {
  userId: number | undefined
}

export default function Technology({ userId }: TechProps) {
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
    if (index === 0) return true
    return sortedCards[index - 1]?.operational && sortedCards[index - 1]?.productionRate >= 5
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 pb-32 mt-4">
      {sortedCards.map((card, index) => (
        <TechnologyCard
        userId={userId}
          key={card.type}
          name={card.type}
          perHr={card.productionRate}
          price={card.purchaseCost}
          
          image={smcoin}
          isEnabled={checkIfEnabled(index)}
          unlockingCondition={`Unlock by leveling ${sortedCards[index - 1]?.type} to level 5`}
          purchaseEnergy={purchaseEnergy} // Ensure userId is passed as a number
        />
      ))}
    </div>
  )
}

type TechnologyCardProps = {
    userId:number | undefined
  name: string
  perHr: number
  price: number
  image: string
  isEnabled: boolean
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
  unlockingCondition,
  purchaseEnergy,
}: TechnologyCardProps) {
    const [isLoading, setIsLoading] = useState(false)
 
console.log(unlockingCondition, isEnabled)
  const handlePurchase = async () => {
    if (userId === undefined) {
      alert("User ID is required to purchase an asset.")
      return
    }


    setIsLoading(true)
    try {
      await purchaseEnergy(userId, name)
      alert("Asset purchased successfully!")
    } catch (error) {
      alert("Failed to purchase asset. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
            
        </div>

        <div
          className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center"
          onClick={handlePurchase}
        >
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : (
            <>
              <Image src={smcoin} alt="coin" w={'25%'} />
              <button
                className={`text-#E3E4E4 text-sm px-1 `}
                onClick={handlePurchase}
              >
                {new Intl.NumberFormat().format(price)}
              </button>
            </>
          )}
        </div>
      </div>

      
    </div>
  )
}
