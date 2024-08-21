import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as fs from 'fs';
import { app } from "../firebase/firebase"
 

const db = getFirestore(app)
const storage = getStorage(app);
const section = collection(db, "cards")

type Card = {
  name: string;
  coinsPerHr: number;
  price: number;
  level: number;
  category: string;
  imagePath: string; // Path to the image file on your local machine
};

async function createCards(data: Card) {
  const exist = await checkCardExist(data.name);
  if (!exist) {
    try {
      // Step 1: Read the image file from the local file system
      const imageBuffer =  fs.readFileSync(data.imagePath);

      // Step 2: Upload the image to Firebase Storage
      const storageRef = ref(storage, `cards/${data.name}`);
      const snapshot = await uploadBytes(storageRef, imageBuffer);

      // Step 3: Get the download URL
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Step 4: Save the card data along with the imageUrl in Firestore
      const docRef = await addDoc(section, {
        name: data.name,
        coinsPerHr: data.coinsPerHr,
        price: data.price,
        category: data.category,
        imageUrl: imageUrl, // Save the image URL
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error creating card: ", err);
    }
  }
}


async function checkCardExist(name: string) {
  const docQ = query(section, where("name", "==", name))
  const qs = await getDocs(docQ)
  if (qs.empty) {
    return false
  }
  return true
}

async function getCardsByCategory(category: string) {
  const docQ = query(section, where("category", "==", category))
  const qs = await getDocs(docQ)
  return qs
}

async function getCard(userId: number, documentId: string) {
  try {
    const data = await getUserLevelData(userId)
    const cardData = data.find(
      (card: { card: { id: string } }) => card.card.id == documentId
    )
    // console.log("level", cardData)
    return cardData
  } catch (err) {
    return
  }
}




  // const businessCards = [
//   {
//     name: "Splitting 1.0",
//     coinsperHr: 95,
//     price: 750,
//   },
//   {
//     name: "Splitting 2.0",
//     perHr: 115,
//     price: 500,
//   },
//   {
//     name: "Splitting 3.0",
//     perHr: 51,
//     price: 2000,
//   },
//   {
//     name: "SPLIT",
//     perHr: 150,
//     price: 3500,
//   },

//   {
//     name: "Freezing",
//     perHr: 217,
//     price: 1750,
//   },
// ]
// const businessCards: Card[]= [
//     {
//     name: "Solar",
//     coinsPerHr: 0.5,
//     price: 500,
//     category: "trade",
//    imagePath: "../Icons/Solar.png"
//   },
//   {
//     name: "Wind",
//     coinsPerHr: 0.5,
//     price: 500,
//     category: "trade",
//    imagePath: "../Icons/Wind.png"
//   },
//   {
//      name: "Nuclear",
//      coinsPerHr: 200,
//     price: 680,
//     category: "trade",
//    imagePath: "../Icons/nuclear.png"
//   },
//   {
//      name: "Gas",
//      coinsPerHr: 195,
//     price: 1000,
//     category: "trade",
//    imagePath: "../Icons/gas.png"
//   },
//   {
//     name: "Carbon",
//      coinsPerHr: 95,
//     price: 775,
//     category: "trade",
//    imagePath: '../Icons/carbon.png'
//   },
//   {
//    name: "Power",
//     coinsPerHr: 95,
//     price: 750,
//     category: "trade",
//    imagePath: "../Icons/power.png"
//   },
//   {
//    name: "3D Wind Device",
//     coinsPerHr: 95,
//     price: 750,
//     category: "trade",
//    imagePath: "../Icons/3D-Wind-Device.png"
//   },
//     {
//    name: "Energy",
//     coinsPerHr: 95,
//     price: 750,
//     category: "trade",
//    imagePath: "../Icons/Energy.png"
//   }
// ]

//   for (const card of businessCards) {
//     await createCards(card);
//   }
// })();


export { createCards, getCardsByCategory, getCard }
