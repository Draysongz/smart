import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getCardsByCategory } from "../helper-functions/cards";
import { getUserLevelData } from "../helper-functions/getUser";

export function useCards(category: string, userId: number | undefined) {
  const [cards, setCards] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCards() {
      if (!userId) return;

      try {
        const cardQs = await getCardsByCategory(category);
        const cardDataArray = await Promise.all(
          cardQs.docs.map(async (card) => {
            const level = await cardLevel(userId, card.id);
            return { ...card.data(), level: level ? level : 0, id: card.id };
          })
        );

        // Use a Map to ensure cards are unique
        const uniqueCards = new Map(
          cardDataArray.map((card) => [card.id, card])
        );
        
        setCards(Array.from(uniqueCards.values()));
        setIsLoading(false);
      } catch (err) {
        console.error("Error from Business getCard func:", err);
      }
    }
    getCards();
  }, [category, userId]);

  return { isLoading, cards, setCards };
}

async function cardLevel(userId: number, documentId: string) {
  try {
    const data = await getUserLevelData(userId)
    const cardData = data.find(
      (card: { card: { id: string } }) => card.card.id == documentId
    )
    console.log("level", cardData)
    return cardData.level
  } catch (err) {
    return
  }
}
