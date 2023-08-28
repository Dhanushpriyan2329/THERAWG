import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupIcon from "@mui/icons-material/Group";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import StarIcon from "@mui/icons-material/Star";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FastForwardIcon from "@mui/icons-material/FastForward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import BallotIcon from "@mui/icons-material/Ballot";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FolderIcon from "@mui/icons-material/Folder";
import WindowIcon from "@mui/icons-material/Window";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LayersIcon from "@mui/icons-material/Layers";
import "./Menubar.css";
import Avatar from "@mui/material/Avatar/Avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menubar = () => {
  // const [isActive, setIsActive] = useState(true);
  const [isVisibel, setVisibel] = useState(true);

  return (
    <>
      <div className="toggle">
        <button className="bar" onClick={() => setVisibel(!isVisibel)}>
          {isVisibel ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>
      <div className={isVisibel ? "main__menu" : "main__menu.active"} onClick={() => setVisibel(true)}>
        <div className="main__text">
          <div className="main__content">
            <ul>
              <div className="main_heading">
                <Link to="/" className="linktexthead">
                  Home
                </Link>
              </div>
              <div className="main_heading">
                <Link to="/Reviews" className="linktexthead">
                  Reviews
                </Link>
              </div>
              <div className="sub__content">
                <div className="main_heading">
                  <h6>Dhanush</h6>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <CardGiftcardIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/Wishlist" className="linktext">
                      Wishlist
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <GroupIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/MyLibrary" className="linktext">
                      MyLibrary
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <CollectionsBookmarkIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/PeopleYouFollow" className="linktext">
                      People You Follow
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub__content">
                <div className="main_heading">
                  <h6>New Releases</h6>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <StarIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/Last30Days" className="linktext">
                      Last 30 Days
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <WhatshotIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/NextWeek" className="linktext">
                      Next Week
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <FastForwardIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/LastWeek" className="linktext">
                      Last Week
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub__content">
                <div className="main_heading">
                  <h6>Top</h6>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <EmojiEventsIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/BestOfTheYear" className="linktext">
                      Best Of The Year
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <BarChartIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/PopularIn2023" className="linktext">
                      Popular In 2023
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <BallotIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/AllTimeTop250" className="linktext">
                      All Time Top 250
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub__content">
                <div className="main_heading">
                  <h6>Browse</h6>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <SportsEsportsIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/Platforms" className="linktext">
                      Platforms
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <FileDownloadIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/Stores" className="linktext">
                      Stores
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <FolderIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/Collections" className="linktext">
                      Collections
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub__content">
                <div className="main_heading">
                  <h6>Platforms</h6>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <WindowIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/PC" className="linktext">
                      PC
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <VideogameAssetIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/PlayStations" className="linktext">
                      PlayStations
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <div className="menu__icons">
                    <LayersIcon />
                  </div>
                  <div className="textLink">
                    <Link to="/XboxOne" className="linktext">
                      Xbox One
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub__content">
                <div className="main_heading">
                  <h6>Geners</h6>
                </div>
                <div className="child__component">
                  <Avatar alt="N" src="#" />
                  <div className="textLink">
                    <Link to="/Actions" className="linktext">
                      Actions
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <Avatar alt="I" src="#" />
                  <div className="textLink">
                    <Link to="/Strategy" className="linktext">
                      Strategy
                    </Link>
                  </div>
                </div>
                <div className="child__component">
                  <Avatar alt="V" src="#" />
                  <div className="textLink">
                    <Link to="/RPG" className="linktext">
                      RPG
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
