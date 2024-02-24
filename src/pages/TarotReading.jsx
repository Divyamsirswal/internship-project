import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ cardNumber, content }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cardContent = showMore ? content : content.slice(0, 10);

  return (
    <div className="bg-white p-4 border rounded shadow-md">
      <p className="text-xl font-semibold mb-2">Card {cardNumber}</p>
      <p>{cardContent}</p>
      {content.length > 100 && (
        <button
          className="text-blue-500 underline mt-2 cursor-pointer"
          onClick={toggleShowMore}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
