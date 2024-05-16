import "./LikeContainer.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";

import PropTypes from "prop-types";

const LikeContainer = ({ photo, user, handleLike }) => {
  return (
    <div className='like'>
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </div>
  );
};

LikeContainer.propTypes = {
  photo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default LikeContainer;
