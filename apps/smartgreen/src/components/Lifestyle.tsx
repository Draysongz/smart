import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Image, Box, Text } from "@chakra-ui/react";
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
    for (const energySource of userData.energySources) {
      totalLicenseFee += energySource.licenseFee;
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ClipLoader color="#fff" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-between gap-2 mt-4 pb-32">
      {cards.map((card, index) => (
        <LifestyleCard
          key={index}
          name={card.name}
          status={card.status}
          purchaseLicense={purchaseLicense}
          cost={totalLicenseFee}
          userId={userId}
          image={smcoin}
        />
      ))}
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
    <div className={`cursor-pointer relative ${status === "licensed" ? "opacity-50" : ""}`}>
      <div className="bg-[#132E25] w-auto rounded-xl text-[#E7ECEA]">
        <div className="px-2 py-1 flex flex-col justify-center items-center">
          <p className="font-bold text-sm text-center pb-2 border-b-[1px] w-full">
            {name}
          </p>
          <Image src={image} alt="coin" w={"35%"} />
          <p className="font-semibold text-[12px] mt-3">Kw per hour</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={smcoin} alt="coin" />
            <p className="text-#E3E4E4 font-bold text-sm">+{cost}</p>
          </div>
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
              <Image src={smcoin} alt="coin" />
              <button
                className="text-#E3E4E4 font-bold text-sm"
                disabled={status === "licensed"}
              >
                {status === "licensed" ? "Licensed" : `${cost} Coins`}
              </button>
            </>
          )}
        </div>
      </div>
      {status === "licensed" && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          background="rgba(0, 0, 0, 0.5)"
          padding="4px 8px"
          borderRadius="4px"
        >
          <Text color="white" fontSize="sm" fontWeight="bold">
            Licensed
          </Text>
        </Box>
      )}
    </div>
  );
}
