import { FaPlaystation, FaPlus, FaWindows, FaXbox } from "react-icons/Fa";
import { Link } from "react-router-dom";


interface Game11 {
  rating: string;
  id: number;
  games_count: number;
  name: string;
  image_background: string;
  released: number;
}

interface Props11 {
  game11: Game11;
}

const MyWishList11 = ({ game11 }: Props11) => {
  return (
    <>
      <div className="card__mainCard">
        <div className="card card_items bg-dark">
          <img
            src={`${game11.image_background}`}
            className="card_img"
            alt="..."
          />
          <div className="card-body">
            <div className="card__icons">
              <FaWindows />
              <FaPlaystation />
              <FaXbox />
            </div>
            <div>
              <Link to={"/Wishlist/:id" +game11.id} className="card-title">
                {`${game11.name} - ${game11.id}`}
              </Link>
            </div>
            <div>
              <p className="card-gamecount">
                <FaPlus />
                {`${game11.games_count}`}
              </p>
            </div>
            <div className="card__textdate">
              <div>
                <p>Release Date:</p>
              </div>
              <div>
                <p>{`${game11.released}` || `29-11-2023`}</p>
              </div>
            </div>
            <div className="card__textdate">
              <p>Geners</p>
              <p>Action</p>
            </div>
            <div className="card__textdate">
              <p>Chart</p>
              <p>#81 Top 2023</p>
            </div>
            <div className="cart__btn">
              <button type="submit" >Show more like this</button>
            </div>
            <div className="cart__btn">
              <button type="submit">Hide this game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWishList11;
