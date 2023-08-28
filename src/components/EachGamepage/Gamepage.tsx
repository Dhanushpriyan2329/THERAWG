import { FaPlaystation, FaWindows, FaXbox } from "react-icons/Fa";
import "./Gamepage.css";
import Result from "../Result/Result";

const Gamepage = () => {
  return (
    <>
      <div className="main__gamepage">
        <div className="gamepage">
          <div className="side__content">
            <div className="dateicons">
              <div className="date">
                <p>Agu 3, 2023</p>
              </div>
              <div>
                <div className="card__icons1">
                  <FaWindows />
                  <FaPlaystation />
                  <FaXbox />
                </div>
              </div>
              <div className="playhours">
                <p>AVERAGE PLAYTIME: 6 HOURS</p>
              </div>
            </div>

            <div className="game__name">
              <h5 className="card-title1"></h5>
            </div>

            <div className="mainboxmodel">
              <div className="main__boxmodel">
              <div className="boxmodel">
                <p>
                  Add to <br />
                  My Games
                </p>
              </div>
              <div className="boxmodel">
                <p>
                  Add to <br />
                  Wishlist
                </p>
              </div>
              <div className="boxmodel">
                <p>
                  Save to
                  <br />
                  Collection
                </p>
              </div>
              </div>
              <div className="side__imgcontent">
                <div className="imgs">
                  <div className="one__img">
                    <img src="#" alt="" className="main__img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="gamepage__about">
              <h3>About</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores magnam neque similique et, libero reprehenderit
                provident dicta, quos sint, officiis facilis sed ducimus modi
                minima veritatis consequuntur! Ipsam atque magnam repellat iusto
                aspernatur provident voluptate, alias harum nihil aut
                praesentium iure temporibus repudiandae saepe dolor est mollitia
                amet eaque doloribus?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi exercitationem rem vero optio
                dolorem voluptatem odit praesentium accusamus et, rerum,
                temporibus illo, tempore laudantium error sequi cumque minus
                placeat numquam ducimus velit. Iste minus ex, odit, molestias ad
                voluptatibus voluptas nemo officiis aliquid neque magnam. Quae
                optio numquam voluptate amet! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Dolores magnam neque similique et,
                libero reprehenderit provident doloribus?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Excepturi exercitationem rem
                vero optio dolorem voluptatem odit praesentium accusamus et,
                rerum, temporibus illo, tempore laudantium error sequi cumque
                minus placeat numquam ducimus velit. Iste minus ex, odit,
                molestias ad voluptatibus voluptas nemo officiis aliquid neque
                magnam. Quae optio numquam voluptate amet!
              </p>
            </div>
          </div>
        </div>
        <div className="result__game">
          <Result />
        </div>
      </div>
    </>
  );
};

export default Gamepage;
