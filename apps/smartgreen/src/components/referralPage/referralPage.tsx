import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import coin from "../../assets/Logo coin 1.png";
import referralCoin from "../../assets/referralCoin.png";
import contact from "../../assets/contact.png";
import copy from "../../assets/Copy.png";
import NavigationBar from "../NavigationBar";
import bg from "../../assets/bg.png";
import listcon from "../../assets/listcont.png";
import boxIcon from "../../assets/boxIcon.png";
import { Users } from "api-contract";

const ReferralPage = ({
  userId,
  userData
}: {
  userId: number | undefined;
  userData: Users 
}) => {
  const [referredUsers, setReferredUsers] = useState<{ name: string; userId: number; coinsEarned: number }[] | undefined>([]);

  useEffect(() => {
    if (userData) {
      setReferredUsers(userData.referrals);
    }
  }, [userData]);

  const copyRef = () => {
    navigator.clipboard.writeText(`https://t.me/Greensmart_bot?start=refId-${userId}`);
    alert("Referral link copied!"); // Optional: Add a better user notification
  };

  return (
    <section className="w-screen flex justify-center h-[100%] bg-black">
      <div className="border-t-custom-large-top rounded-t-3xl border-y-custom-yellow w-full items-center bg-custom-goldyellow h-full">
        <Box
          className="bg-dark-green w-full flex flex-col pt-4 items-center rounded-t-3xl h-[100%] pb-32 bg-cover bg-center"
          bgImage={bg}
        >
          <img src={referralCoin} alt="" className="w-[33%]" />
          <h2 className="text-white text-3xl font-bold">Invite your Friends</h2>
          <p className="text-white pt-5 text-lg">
            You and your friend will receive bonuses
          </p>
          <div className="w-full flex flex-col gap-4 mt-[40px] items-center">
            <div className="w-11/12 bg-dark-green rounded-2xl flex gap-6 items-center p-5">
              <img src={contact} alt="" />
              <span className="flex flex-col">
                <p className="text-white">Invite a Friend</p>
                <span className="flex gap-1">
                  <img src={coin} alt="" className="w-[30px] h-[30px]" />
                  <p className="text-custom-gold">+45,000 for you and a friend</p>
                </span>
              </span>
            </div>
            <div className="w-11/12 bg-dark-green rounded-2xl flex gap-6 items-center p-5">
              <img src={contact} alt="" />
              <span className="flex flex-col">
                <p className="text-white">
                  Invite a Friend with Telegram Premium
                </p>
                <span className="flex gap-1">
                  <img src={coin} alt="" className="w-[30px] h-[30px]" />
                  <p className="text-custom-gold">+45,000 for you and a friend</p>
                </span>
              </span>
            </div>

            {userData && referredUsers && referredUsers.length > 0 ? (
              <div className="flex flex-col w-11/12 bg-dark-green rounded-2xl py-7 gap-5">
                <p className="text-white pl-7 text-2xl">Friend List</p>
                <ol className="flex flex-col gap-3 text-white" style={{ listStyleType: "decimal" }}>
                  {referredUsers.map((user, index) => (
                    <li
                      key={user.userId} // Assuming `user.userId` is a unique identifier
                      className="flex items-center self-center bg-list-green w-11/12 h-[80px] rounded-xl px-4 gap-5"
                    >
                      <p>{index + 1}.</p>
                      <img src={listcon} alt="" />
                      <p>{user.name}</p> {/* Ensure `user.name` exists */}
                      <p className="ml-10">{user.coinsEarned.toLocaleString()}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="flex flex-col w-11/12 bg-dark-green rounded-2xl py-7 gap-5 items-center">
                <span className="flex w-full px-5 text-center">
                  <img src={contact} alt="" className="w-[30px]" />
                  <p className="text-white text-2xl font-semibold w-[80%]">
                    Friend List
                  </p>
                </span>
                <span className=" flex border border-white w-[90px] self-center justify-self-center -mt-[15px]"></span>
                <img src={boxIcon} alt="" className="w-[100px]" />
                <p className="text-white opacity-50 text-center">
                  You have not invited anyone yet
                </p>
              </div>
            )}

            <div className="flex gap-2 mt-2 w-11/12">
              <button className="flex gap-3 bg-light-green w-10/12 items-center justify-center">
                <p className="text-white">Invite a friend</p>
                <img src={contact} alt="" />
              </button>
              <button className="bg-light-green p-4" onClick={copyRef}>
                <img src={copy} alt="" />
              </button>
            </div>
          </div>
          <NavigationBar />
        </Box>
      </div>
    </section>
  );
};

export default ReferralPage;
