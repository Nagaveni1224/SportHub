import {
  useEffect,
  useState
} from "react";

import Loading from "../components/Loading";

function Leagues() {

  const [leagues,setLeagues] =
    useState([]);

  const [loading,setLoading] =
    useState(false);

  useEffect(()=>{

    const fetchLeagues =
      async()=>{

      try{

        setLoading(true);

        const response =
          await fetch(
            "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
          );

        const data =
          await response.json();

        setLeagues(
          data.leagues
        );

      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }
    };

    fetchLeagues();

  },[]);

  if(loading){
    return <Loading />;
  }

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-10
        "
      >
        Sports Leagues
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-5
        "
      >

        {leagues.map((league)=>(

          <div
            key={league.idLeague}
            className="
            bg-white
            p-5
            rounded-xl
            shadow-lg
            "
          >

            <h2 className="font-bold">
              {league.strLeague}
            </h2>

            <p>
              {league.strSport}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Leagues;