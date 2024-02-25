import React, { useState } from "react";
import Card from "../../components/Card/Card";

const TarotReading = () => {
  const [cardsToShow, setCardsToShow] = useState(2); // Initial number of cards to show

  const handleSeeMore = () => {
    setCardsToShow(cardsToShow + 2); // Show additional 2 cards when "See More" is clicked
  };

  const handleSeeLess = () => {
    setCardsToShow((prev) => Math.max(prev - 2, 2)); // Show less 2 cards or minimum 2 cards
  };

  // Dummy data, replace it with your actual data
  const cardData = [
    { cardNumber: 1, name: "Card A" },
    { cardNumber: 2, name: "Card B" },
    { cardNumber: 3, name: "Card C" },
    // Add more cards as needed
  ];

  return (
    <div className="w-screen h-screen bg-violet-100">
      <h1 className="text-center p-10 font-semibold">Tarot Reading</h1>
      <div className="flex flex-col items-center justify-center w-screen px-4 sm:px-8 md:px-16 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardData.slice(0, cardsToShow).map((card, index) => (
            <Card key={index} cardNumber={card.cardNumber} name={card.name} />
          ))}
        </div>
        {cardsToShow < cardData.length ? (
          <div className="mt-4">
            <button
              className="text-blue-500 underline cursor-pointer mr-2"
              onClick={handleSeeMore}
            >
              See More
            </button>
            {cardsToShow > 6 && (
              <button
                className="text-blue-500 underline cursor-pointer ml-2" // Added "ml-2" for left margin
                onClick={handleSeeLess}
              >
                See Less
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TarotReading;
