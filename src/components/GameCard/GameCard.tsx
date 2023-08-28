import { Link } from "react-router-dom";
import "./GameCard.css";
import { FaPlaystation, FaPlus, FaWindows, FaXbox } from "react-icons/Fa";
interface Game {
  id: number;
  games_count: number;
  name: string;
  image_background: string;
  released: number;
}

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="card__mainCard">
        <div className="card card_items bg-dark">
          <img
            src={`${game.image_background}`}
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
              <Link
                to={`/Gamedetail/${game.id}`  }
                className="card-title"
              >{`${game.name} - ${game.id}`}</Link>
            </div>
            <div>
              <p className="card-gamecount">
                <FaPlus />
                {`${game.games_count}`}
              </p>
            </div>
            <div className="card__textdate">
              <div>
                <p>Release Date:</p>
              </div>
              <div>
                <p>{`${game.released}` || `23-04-2023`}</p>
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

export default GameCard;

{
  /* <div className="Games">
        <img 
        src={`${game.image_background }`} 
        />
    </div> */
}

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
