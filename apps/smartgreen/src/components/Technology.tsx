import { useState } from "react"
import { useCards } from "../hooks/useCards"
import { ClipLoader } from "react-spinners"
import { useUpdateCoinsPerHour } from "../hooks/useUpdateCoinsPerHour"
import { Image } from "@chakra-ui/react"
import smcoin from "../assets/smcoin.png";
import { Users } from "api-contract"

interface TechProps {
  userId: number | undefined
  name: string | null
  userData: Users | null
}

export default function Technology({ userId, name, userData }: TechProps) {
  const { isLoading, cards, setCards } = useCards("technology", userId)
  const { updateCoinsPerHour } = useUpdateCoinsPerHour()

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    )
  }

  // Define the desired order
  const order = ["Solar", "Wind", "3D Wind"]

  // Sort the cards based on the defined order
  const sortedCards = cards.sort((a, b) => {
    const indexA = order.indexOf(a.name)
    const indexB = order.indexOf(b.name)

    // If both cards are in the order array, compare their indices
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }
    // If only one card is in the order array, it comes first
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1

    // If neither card is in the order array, maintain original order
    return a.name.localeCompare(b.name)
  })

  // Define conditions for enabling cards
  const checkIfEnabled = (index: number) => {
    if (index === 0) return true // Solar card is always enabled
    return sortedCards[index - 1]?.level >= 5 // Previous card level >= 5 enables the next card
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 pb-32 mt-4">
      {sortedCards.map((card, index) => (
        <TechnologyCard
          key={card.name}
          name={card.name}
          perHr={card.coinsPerHr}
          price={card.price}
          level={card.level}
          image={card.imageUrl}
          isEnabled={checkIfEnabled(index)}
          unlockingCondition={`Unlock by le veling ${order[index - 1]} to level 5`}
          onClick={async () =>
            await updateCoinsPerHour(
              userId,
              card.price,
              card.coinsPerHr,
              index,
              sortedCards,
              userData,
              setCards
            )
          }
        />
      ))}
    </div>
  )
}

type TechnologyCardProps = {
  name: string
  perHr: number
  price: number
  level: number
  image: string
  isEnabled: boolean
  unlockingCondition: string
  onClick: () => Promise<void>
}

function TechnologyCard({
  name,
  perHr,
  price,
  level,
  image,
  isEnabled,
  unlockingCondition,
  onClick,
}: TechnologyCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={`relative ${!isEnabled ? "opacity-50" : ""}`}>
      <div
        className={`bg-[#132E25] w-auto rounded-xl text-[#E7ECEA] ${
          !isEnabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="px-2 py-1 flex flex-col justify-center items-center">
          <p className="font-bold text-sm text-center pb-2 border-b-[1px] w-full ">
            {name}
          </p>
          <p className="w-full mt-2 font-semibold text-sm text-right">
            {level} lvl
          </p>
          <Image src={image} alt={name} w="70px" h="70px" objectFit="cover" />
          <p className="font-semibold text-[12px] mt-3">Kw per hour</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={smcoin} alt="coin" />
            <p className="text-#E3E4E4 font-bold text-sm">+{perHr}</p>
          </div>
        </div>
        <div
          className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center gap-2"
          onClick={async () => {
            setIsLoading(true)
            await onClick()
            setIsLoading(false)
          }}
        >
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : (
            <>
              <Image src={smcoin} alt="coin" />
              <button className="text-#E3E4E4 font-bold text-sm">
                {price}
              </button>
            </>
          )}
        </div>
      </div>

      {!isEnabled && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xs font-semibold">
          {unlockingCondition}
        </div>
      )}
    </div>
  )
}
