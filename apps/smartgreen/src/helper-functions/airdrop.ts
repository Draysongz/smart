
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/firebase"; // Adjust import as needed

const db = getFirestore(app);

async function fetchAllUsers() {
  try {
    const usersCollection = collection(db, "smart"); // Replace with your collection name
    const querySnapshot = await getDocs(usersCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
}

async function calculateTotalCoins(users: any[]) {
  return users.reduce((acc, user) => acc + (user.coinsEarned || 0), 0);
}

async function calculateUserRank(users: any[], userId: number) {
  const sortedUsers = users.sort((a, b) => (b.coinsEarned || 0) - (a.coinsEarned || 0));
  const rank = sortedUsers.findIndex(user => user.userId === userId) + 1; // Rank is 1-based
  return rank;
}



export {
    fetchAllUsers,
    calculateTotalCoins,
    calculateUserRank
}

