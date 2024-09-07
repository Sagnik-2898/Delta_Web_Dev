import { useState } from "react";

const Likebutton = () => {
  let likeStyle = { color: "red" };

  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="likeBtn">
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle} />
        ) : (
          <i className="fa-regular fa-heart" />
        )}
      </p>
    </div>
  );
};

export default Likebutton;
