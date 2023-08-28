import { useEffect, useState } from "react";
import axios from "../services/Axios";
import GameCard from "../GameCard/GameCard";
import Service from "../services/Service";
import "./Result.css";
import ScaleLoader from "react-spinners/ScaleLoader";

const Result = () => {
  const [games, setGames] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
    const fetchData = async () => {
      const request = await axios.get(Service.fetchPlatforms);
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
        {games.map((game) => (
          <>
            <GameCard game={game} />
          </>
        ))}
      </div>
    </>
  );
};

export default Result;

/*
                games.map((game) =>{
                <GameCard game={game} />
            })

    */

//             import { useEffect, useState } from "react";
// import axios from "../services/Axios";
// import GameCard from "../GameCard/GameCard";
// import Service from "../services/Service";

// const Result = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const request = await axios.get(Service.fetchCollections);
//       setGames(request.data.results);
//       console.log(request.data.results);
//     };

//     fetchData();
//   }, []);
//   console.log(games);

//   return (
//     <div className="results">
//       {games.map((game) => (
//         <GameCard game={game} />
//       ))}
//     </div>
//   );
// };

// export default Result;
