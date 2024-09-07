import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Rating = ({
  disabled = false,
  value,
}: {
  disabled?: boolean;
  value?: number;
}) => {
  const [rating, setRating] = useState(value ? value : 0);
  const handleRatingClick = (value: number) => {
    // if (!authState?.authenticated) {
    //   openModal();
    //   return;
    // }
    // rateHostel(hostelId, value);
    setRating(value);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  // useEffect(() => {
  //   if (authState?.authenticated && !isError) {
  //     if (!isLoading && ratingData) {
  //       setRating(ratingData.rate);
  //     }
  //   }
  // }, [authState, ratingData, isLoading, isError]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex gap-2 p-2">
      <div className="flex">
        {stars.map((star) => (
          <button
            key={star}
            onClick={() => {
              if (!disabled) {
                handleRatingClick(star);
              }
            }}
            className={`text-xl mr-2 ${
              star <= rating ? "text-primary" : "text-gray-300"
            } ${disabled ? "cursor-default" : "cursor-pointer"}`}
          >
            <Star size={18} />
          </button>
        ))}
      </div>
      {/* <p className="mt-2 text-gray-400 text-xs">
        You rated them {rating} {rating === 1 ? "star" : "stars"}.
      </p> */}
    </div>
  );
};

export default Rating;
