import SentimentDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentDissatisfiedTwoTone";
import "./WishList.css"



const WishList = () => {
  return (
    <>
      <div className="review__box1">
        <div className="icons">
          <SentimentDissatisfiedTwoToneIcon />
        </div>
        <div className="review__para">
          <p>No games found. Try clearing all filters.</p>
        </div>
      </div>
    </>
  );
};

export default WishList;
