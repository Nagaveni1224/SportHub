import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Leagues() {

  const { sport } = useParams();

  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    const fetchLeagues = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?s=${sport}`
        );

        const data = await response.json();

        setLeagues(data.countries || []);

      } catch (error) {

        console.error("Error fetching leagues:", error);
        setLeagues([]);

      } finally {

        setLoading(false);

      }
    };

    fetchLeagues();

  }, [sport]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        🥇 {sport?.toUpperCase()} LEAGUES
      </h1>

      <p className="text-center text-xl text-gray-600 font-semibold mb-10">
        Explore leagues and tournaments of {sport}
      </p>

      {leagues.length === 0 ? (

        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-500">
            No leagues found 😔
          </h2>
        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-6">

          {leagues.map((league) => (

            <div
              key={league.idLeague}
              className="
              bg-white
              rounded-2xl
              shadow-xl
              p-8
              text-center
              hover:scale-105
              hover:bg-yellow-500
              hover:text-white
              duration-300
              border
              "
            >

              <div className="text-5xl mb-4">
                🏆
              </div>

              <h2 className="text-2xl font-bold">
                {league.strLeague}
              </h2>

              <p className="mt-2 text-sm">
                {league.strSport}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Leagues;