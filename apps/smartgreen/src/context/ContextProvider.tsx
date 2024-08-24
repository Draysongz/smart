// // src/context/UserContext.tsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { Users } from 'api-contract';
// import useuser
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Replace with your backend URL

// interface UserContextType {
//   userData: Users | null;
//   setUserData: React.Dispatch<React.SetStateAction<Users | null>>;
// }

// interface UserProviderProps {
//   children: React.ReactNode;
//   userId: number;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<UserProviderProps> = ({ children, userId }) => {
//   const [userData, setUserData] = useState<Users | null>(null);
//   const { getUserData } = useUserApi();

//   const fetchUserData = async () => {
//     const result = await getUserData(userId, '', '');
//     if (result?.data) {
//       setUserData(result.data);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchUserData();
//     }
//   }, [userId]);

//   useEffect(() => {
//     socket.on('userUpdated', (updatedUser: Users) => {
//       if (updatedUser.userId === userId) {
//         setUserData(updatedUser);
//       }
//     });

//     return () => {
//       socket.off('userUpdated');
//     };
//   }, [userId]);

//   return (
//     <UserContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUserContext must be used within a UserProvider');
//   }
//   return context;
// };
