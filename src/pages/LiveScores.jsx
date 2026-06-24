import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";

function LiveScores() {

  const { sport } = useParams();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const leagues = {
    football: "English Premier League",
    cricket: "Indian Premier League",
    basketball: "NBA",
    baseball: "MLB",
    hockey: "NHL",
    rugby: "Super Rugby"
  };

  useEffect(() => {

    setLoading(true);

    const fetchScores = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(
            leagues[sport] || "English Premier League"
          )}`
        );

        const data = await response.json();

        setMatches(data.event || []);

      } catch (error) {

        console.error(error);
        setMatches([]);

      } finally {

        setLoading(false);

      }
    };

    fetchScores();

  }, [sport]);

  if (loading) {
    return <Loading />;
  }

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        📊 {sport?.toUpperCase()} SCORES
      </h1>

      <p className="text-center text-xl text-gray-600 mb-10">
        Recent Matches & Results
      </p>

      {matches.length === 0 && (
        <div className="text-center py-10">

          <h2 className="text-3xl text-gray-500">
            No match data found 😔
          </h2>

        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">

        {matches.slice(0, 12).map((match) => (

          <div
            key={match.idEvent}
            className="
            bg-white
            rounded-2xl
            shadow-xl
            p-6
            border
            hover:shadow-2xl
            duration-300
            "
          >

            <h2 className="text-2xl font-bold text-center mb-4">
              {match.strEvent}
            </h2>

            <div className="flex justify-between items-center">

              <div className="text-center">
                <h3 className="font-bold">
                  {match.strHomeTeam}
                </h3>

                <p className="text-4xl font-bold text-blue-600">
                  {match.intHomeScore ?? "-"}
                </p>
              </div>

              <div className="text-center">
                <span className="text-2xl font-bold">
                  VS
                </span>
              </div>

              <div className="text-center">
                <h3 className="font-bold">
                  {match.strAwayTeam}
                </h3>

                <p className="text-4xl font-bold text-red-600">
                  {match.intAwayScore ?? "-"}
                </p>
              </div>

            </div>

            <div className="mt-4 text-center text-gray-500">

              <p>{match.dateEvent}</p>

              <p>{match.strLeague}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LiveScores;