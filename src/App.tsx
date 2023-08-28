import Menubar from "./components/menu/Menubar";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Result from "./components/Result/Result";
import { Route, Routes } from "react-router-dom";
import Maincontent from "./components/maincontent/Maincontent";
import MyWishListResult from "./components/MyWishList/MyWishListResult";
import MyWishListResult1 from "./components/Eachpagelist/AllTimeTop/MyWishListResult1";
import MyWishListResult2 from "./components/Eachpagelist/Bestoftheyear/MyWishListResult2";
import MyWishListResult3 from "./components/Eachpagelist/Collections/MyWishListResult3";
import MyWishListResult4 from "./components/Eachpagelist/Last30Days/MyWishListResult4";
import MyWishListResult5 from "./components/Eachpagelist/Lastweek/MyWishListResult5";
import MyWishListResult6 from "./components/Eachpagelist/NextWeek/MyWishListResult6";
import MyWishListResult7 from "./components/Eachpagelist/PC/MyWishListResult7";
import MyWishListResult8 from "./components/Eachpagelist/platforms/MyWishListResult8";
import MyWishListResult9 from "./components/Eachpagelist/playStation/MyWishListResult9";
import MyWishListResult11 from "./components/Eachpagelist/populerin2023/MyWishListResult11";
import Reviews from "./components/Reviewsfile/Reviews"
import WishList from "./components/Eachpagelist/WishList/WishList";
import PeopleFollow from "./components/Eachpagelist/PeopleFollowYou/PeopleFollow";
import Gamepage from "./components/EachGamepage/Gamepage";


const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="same__contant">
          <Menubar />
          <div className="main_contentBLog">
            <Maincontent />
            <Routes>
              <Route path="/" element={<MyWishListResult5 />} />  
              <Route path="/Wishlist" element={<WishList />} />  
              <Route path="/MyLibrary" element={<MyWishListResult6 />} />  
              <Route path="/PeopleYouFollow" element={<PeopleFollow />} />  
              <Route path="/Last30Days" element={<Result />} />
              <Route path="/NextWeek" element={<MyWishListResult />} />
              <Route path="/LastWeek" element={<MyWishListResult1 />} />
              <Route path="/BestOfTheYear" element={<MyWishListResult2 />} />
              <Route path="/PopularIn2023" element={<MyWishListResult3 />} />
              <Route path="/AllTimeTop250" element={<MyWishListResult4 />} />
              <Route path="/Platforms" element={<MyWishListResult5 />} />
              <Route path="/Stores" element={<MyWishListResult6 />} />
              <Route path="/Collections" element={<MyWishListResult7 />} />
              <Route path="/PC" element={<MyWishListResult8 />} />
              <Route path="/PlayStations" element={<MyWishListResult9 />} />
              <Route path="/XboxOne" element={<MyWishListResult7 />} />
              <Route path="/Actions" element={<MyWishListResult3 />} />
              <Route path="/Strategy" element={<MyWishListResult5 />} />
              <Route path="/RPG" element={<MyWishListResult11/>} />
              <Route path="/Reviews" element={<Reviews />} />
              <Route path="/Gamedetail/:id" element={<Gamepage />} />
            </Routes>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
