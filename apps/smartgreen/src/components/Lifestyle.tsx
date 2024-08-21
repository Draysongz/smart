// import { useState } from "react"
// import { ClipLoader } from "react-spinners"
// import { useCards } from "../hooks/useCards"
// import { usesPerHour } from "../hooks/usesPerHour"
// import { Image } from "@chakra-ui/react"
// import smcoin from "../assets/smcoin.png";
// import { Users } from "api-contract"


// interface LifestyleProps {
//   userId: number | undefined
//   name: string | null
//   userData: Users | null
// }

// export default function Lifestyle({ userId, name, userData }: LifestyleProps) {
//   const { isLoading, cards, setCards } = useCards("business", userId)
//   console.log(name)
//   const { sPerHour } = usesPerHour()
//   if (isLoading) {
//     return (
//       <div className="flex justify-center">
//         <ClipLoader color="#fff" />
//       </div>
//     )
//   }
//   return (
//     <div className="grid grid-cols-3 justify-between gap-2 mt-4 pb-32">
//       {cards.map((card, index) => (
//         <LifestyleCard
//           key={card.name}
//           name={card.name}
//           perHr={card.coinsPerHr}
//           price={card.price}
//           level={card.level}
//           image={card.imageUrl}
//           onClick={async () =>
//             await sPerHour(
//               userId,
//               card.price,
//               card.coinsPerHr,
//               index,
//               cards,
//               userData,
//               setCards
//             )
//           }
//         />
//       ))}
//     </div>
//   )
// }

// type PropType = {
//   name: string
//   perHr: number
//   price: number
//   level: number
//     image: string
//   onClick: () => Promise<void>
// }

// function LifestyleCard({ name, perHr, price, level, image, onClick }: PropType) {
//   const [isLoading, setIsLoading] = useState(false)
//   return (
//     <div className="cursor-pointer">
//       <div className="bg-[#132E25] w-auto rounded-xl text-[#E7ECEA]">
//         <div className="px-2 py-1 flex flex-col justify-center items-center">
//           <p className="font-bold text-sm text-center pb-2 border-b-[1px] w-full">
//             {name}
//           </p>
//           <p className="w-full mt-2 font-semibold text-sm text-right">
//             {level} lvl
//           </p>
//           <Image src={image} alt="coin" w={"35%"} />
//           <p className="font-semibold text-[12px] mt-3">Kw per hour</p>
//           <div className="flex items-center gap-1 mt-1">
//             <Image src={smcoin} alt="coin" />
//             <p className="text-#E3E4E4 font-bold text-sm">+{perHr}</p>
//           </div>
//         </div>

//         <div
//           className="bg-[#7EB43C] rounded-xl h-14 flex justify-center items-center gap-2"
//           onClick={async () => {
//             setIsLoading(true)
//             await onClick()
//             setIsLoading(false)
//           }}
//         >
//           {isLoading ? (
//             <ClipLoader color="#fff" />
//           ) : (
//             <>
//                 <Image src={smcoin} alt="coin" />
//               <button className="text-#E3E4E4 font-bold text-sm">
//                 {price}
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
