import { FaPlaystation, FaPlus, FaWindows, FaXbox } from "react-icons/Fa";
import { Link } from "react-router-dom";


interface Game6 {
  rating: string;
  id: number;
  games_count: number;
  name: string;
  image_background: string;
  released: number;
}

interface Props6 {
  game6: Game6;
}

const MyWishList5 = ({ game6 }: Props6) => {
  return (
    <>
      <div className="card__mainCard">
        <div className="card card_items bg-dark">
          <img
            src={`${game6.image_background}`}
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
              <Link to={"/Wishlist/:id" +game6.id} className="card-title">
                {`${game6.name} - ${game6.id}`}
              </Link>
            </div>
            <div>
              <p className="card-gamecount">
                <FaPlus />
                {`${game6.games_count}`}
              </p>
            </div>
            <div className="card__textdate">
              <div>
                <p>Release Date:</p>
              </div>
              <div>
                <p>{`${game6.released}` || `29-11-2023`}</p>
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

export default MyWishList5;
