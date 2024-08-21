// import { useEffect, useState } from "react";
// import { getUserData } from "../helper-functions/getUser"; // Assuming you have a getUserData function

// const useReferredUsersData = (referrals: number[]) => {
//   const [referredUsers, setReferredUsers] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchReferredUsers() {
//       const usersData = await Promise.all(
//         referrals.map(async (referralId) => {
//           const user = await getUserData(referralId, "");
//           return user?.data;
//         })
//       );
//       setReferredUsers(usersData);
//     }

//     if (referrals.length > 0) {
//       fetchReferredUsers();
//     }
//   }, [referrals]);

//   return referredUsers;
// };

// export{
//     useReferredUsersData
// }
