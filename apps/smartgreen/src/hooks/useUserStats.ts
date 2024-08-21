// import { useState, useEffect } from "react";
// import { fetchAllUsers, calculateTotalCoins, calculateUserRank } from "../helper-functions/airdrop";

// export function useUserStats(userId: number | undefined) {
//   const [totalCoins, setTotalCoins] = useState<number | null>(null);
//   const [userRank, setUserRank] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [users, setUsers] = useState<any[] | null>(null); // Change to 'any[]' or define a user type
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchAndCalculate() {
//       setIsLoading(true);
//       try {
//         const users = await fetchAllUsers();
//         setUsers(users);

//         const totalCoins = await calculateTotalCoins(users);
//         setTotalCoins(totalCoins);

//         if (userId !== undefined) {
//           const rank = await calculateUserRank(users, userId);
//           setUserRank(rank);
//         } else {
//           setUserRank(null);
//         }
//       } catch (err) {
//         console.error("Error fetching or calculating user stats: ", err);
//         setError("Failed to fetch or calculate user stats");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchAndCalculate();
//   }, [userId]);

//   return { totalCoins, userRank, users, isLoading, error };
// }
