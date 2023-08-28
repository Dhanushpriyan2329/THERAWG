import { useEffect, useState } from "react";
import axios from "../../services/Axios";
import Service from "../../services/Service";
import MyWishList2 from "./MyWishList2";
import ScaleLoader from "react-spinners/ScaleLoader";

const MyWishListResult2 = () => {
  const [games3, setGames] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const request = await axios.get(Service.fetchCollections);
      setGames(request.data.results);
      console.log(request.data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
    {loading && 
        <div className="loader">
          <ScaleLoader
            color={"white"}
            aria-setsize={120}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        }
      <div className="results">
        {games3.map((game3) => (
          <MyWishList2 game3={game3} />
        ))}
      </div>
    </>
  );
};

export default MyWishListResult2;

// const MyWishListResult = () => {
//   const [games1, setGames1] = useState([]);
//   const [currentComp, setcurrentComp] = useState("lib");

//   const { comp } = useParams();
//   console.log(comp);
//   //setcurrentComp(comp);

//   useEffect(() => {
//     const fetchData1 = async () => {
//       let request1;
//       if (currentComp == "lib") {
//         request1 = await axios.get(Service.fetchCollections);
//       } else if (currentComp == "wish") {
//         request1 = await axios.get(Service.fetchPlatforms);
//       }
//       setGames1(request1.data.results);
//       console.log(request1.data.results);
//     };

//     fetchData1();
//   }, [currentComp]);
//   console.log(games1);
