import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="review__box">
        <div className="review__text">
          <h2>Counter-Strike: Condition Zero</h2>
        </div>
        <div className="review__para">
          <p>
            It's like Counter-Strike 1.6 but better. Don't listen to haters.
          </p>
        </div>
        <div className="review__h5">
          <div className="review__h5text">
            <h5>«CANT STOP PLAYING»</h5>
          </div>
          <div className="review__h5text">
            <h5>«UNDERRATED»</h5>
          </div>
        </div>
        <div className="review__icons">
          <ThumbUpIcon />
          <p>2+</p>
          <ThumbDownIcon />
        </div>
      </div>

      <div className="review__box1">
        <div className="review__text">
          <h2>Grand Theft Auto: San Andreas</h2>
        </div>
        <div className="review__para">
          <p>
            One of the best open world role-playing classics to date, still
            holding up to these days.
          </p>
        </div>
        <div className="review__h5">
          <div className="review__h5text">
            <h5>«BLEW MY MIND»</h5>
          </div>
          <div className="review__h5text">
            <h5>«TIME-TESTED»</h5>
          </div>
        </div>
        <div className="review__icons">
          <ThumbUpIcon />
          <p>4+</p>
          <ThumbDownIcon />
        </div>
      </div>
    </>
  );
};

export default Reviews;
