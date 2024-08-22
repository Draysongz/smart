// hooks/useUserApi.ts
import apiClient from "../api-client";
import { Users } from "api-contract";

export function useUserApi() {
  
  const createUser = async (userId: number, name: string, username: string) => {
    try {
      const response = await apiClient.users.create.mutation({ body: { userId, name, username } });
      console.log("User created:", response);
      return response;
    } catch (error) {
      console.log("Error creating user:", error);
      console.log(error); // Throw error to handle it in the calling function
    }
  };

  const updateUserData = async (userId: number, updates: Partial<Users>) => {
    try {
      const response = await apiClient.users.update.mutation({ params: { userId }, body: updates });
      console.log("User updated:", response);
      return response;
    } catch (err) {
      console.log("Error updating user data:", err);
      throw err; // Throw error to handle it in the calling function
    }
  };

  const getOne = async (userId: number) => {
    try {
      const response = await apiClient.users.getOne.query({ params: { userId } });
      console.log("Fetched user data:", response);
      return response;
    } catch (error) {
      console.log("Error fetching user data:", error);
      return { status: 500, body: null };
    }
  };

  const updateReferralData = async (userId: number, referralId: number) => {
    try {
      const referralQuery = await getOne(referralId);
      if (referralQuery.status !== 200 || !referralQuery.body) {
        console.log("No referrer found with that ID.");
        return;
      }

      const userQuery = await getOne(userId);
      if (userQuery.status !== 200 || !userQuery.body) {
        console.log("No user found with that ID.");
        return;
      }

      if (referralQuery.body.referrals?.includes(userId)) {
        console.log("User has already been referred.");
        return;
      }

      const updatedReferralData = {
        coinsEarned: (referralQuery.body.coinsEarned || 0) + 45000,
        referrals: [...(referralQuery.body.referrals || []), userId],
      };

      await updateUserData(referralId, updatedReferralData);

      const updatedUserData = {
        coinsEarned: (userQuery.body.coinsEarned || 0) + 45000,
      };

      await updateUserData(userId, updatedUserData);
    } catch (err) {
      console.log("Error updating referral data:", err);
    }
  };

   let userCreationInProgress = false;

 const getUserData = async (userId: number, name: string, username: string, referralId?: number): Promise<{ data: Users | null } | null> => {
 
  if (userCreationInProgress) {
    console.log("User creation is already in progress.");
    return null; // Prevent multiple creation attempts
  }

  try {
    const data = await getOne(userId);
     if (data?.status === 500) {
      // Handle server error differently, don't create a new user
      console.log("Server error occurred while fetching user data.");
      return null; // Early return, don't proceed to create a user
    }

    if (data?.status === 404 || !data.body || 'message' in data.body) {
      userCreationInProgress = true;
      console.log("User does not exist, creating user...");
      await createUser(userId, name, username);

      // Fetch the newly created user data
      const newData = await getOne(userId);

      if (referralId && referralId !== userId) {
        await updateReferralData(userId, referralId);
      }
       userCreationInProgress = false;
      if (newData?.status === 200 && newData.body && !('message' in newData.body)) {
        return { data: newData.body };
      } else {
        console.log("Error fetching newly created user data");
        return null;
      }
    }

    if (data?.status === 200 && data.body && !('message' in data.body)) {
      return { data: data.body };
    } else {
      console.log("Error: Unexpected response structure or user not found");
      return null;
    }
  } catch (err) {
    console.log("Error in getUserData:", err);
    return null;
  }
};



const purchaseAsset = async (name: string, userId: number)=>{
  try {
    const response = await apiClient.users.purchaseAsset.mutation({params:{
    name: name,
    userId: userId
  }, body:{}})
    console.log("Asset purchased", response);
    return response;
  } catch (error) {
    console.log("Error purchasing asset:", error);
      throw error; // Throw error to handle it in the calling function
  }
}


const purchaseEnergy = async (userId: number, energyType: string)=>{
  try {
    const response = await apiClient.users.purchaseEnergySource.mutation({params: {
      userId: userId,
      energyType: energyType
    }, body: {}},)
    console.log("Asset purchased", response);
    return response;
  } catch (error) {
    console.log("Error purchasing asset:", error);
      throw error; // Throw error to handle it in the calling function
  }
}


  return {
    getUserData,
    getOne,
    updateUserData,
    purchaseAsset,
    purchaseEnergy
  };
}
