import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ cardNumber, name }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white p-4 border rounded shadow-md">
      <p className="text-xl font-semibold mb-2">
        {name} {cardNumber}
      </p>
      <p className={showMore ? "block" : "hidden"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
      </p>
      <button
        className="text-blue-500 underline cursor-pointer"
        onClick={toggleShowMore}
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

Card.propTypes = {
  cardNumber: PropTypes.number.isRequired,
};

export default Card;
