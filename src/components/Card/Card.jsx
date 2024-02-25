import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ cardNumber, name }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-md my-4">
      <div className="bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-4">
          <p className="text-xl font-semibold mb-2">
            {name} {cardNumber}
          </p>
          <p className={`${showMore ? "block" : "hidden"} text-gray-700`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          </p>
        </div>
        <div className="bg-gray-100 p-4">
          <button
            className="text-blue-500 underline cursor-pointer"
            onClick={toggleShowMore}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardNumber: PropTypes.number.isRequired,
};

export default Card;
