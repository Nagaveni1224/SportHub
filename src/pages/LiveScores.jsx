import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    rugby: "Super Rugby",
  };

  const sportBackgrounds = {
    football:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600",
    cricket:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600",
    basketball:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600",
    baseball:
      "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=1600",
    volleyball:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600",
    hockey:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1600",
    rugby:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600",
  };

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(
            leagues[sport] || "English Premier League"
          )}`
        );

        setMatches(response.data.event || []);
      } catch (err) {
        console.error(err);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [sport]);

  if (loading) return <Loading />;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${sportBackgrounds[sport]})`,
      }}
    >
      <div className="min-h-screen bg-black/80">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              📊 {sport?.toUpperCase()} LIVE SCORES
            </h1>

            <p className="text-xl text-gray-200">
              Latest match results and live scores
            </p>

          </div>

          {matches.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-4xl font-bold text-white">
                No Match Data Available 😔
              </h2>

            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">

            {matches.slice(0, 12).map((match) => (

              <div
                key={match.idEvent}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-all duration-300"
              >

                <h2 className="text-2xl font-bold text-center mb-8">
                  {match.strEvent}
                </h2>

                <div className="flex justify-between items-center">

                  <div className="text-center">

                    <h3 className="font-bold text-lg">
                      {match.strHomeTeam}
                    </h3>

                    <p className="text-5xl text-blue-400 font-bold mt-3">
                      {match.intHomeScore ?? "-"}
                    </p>

                  </div>

                  <div className="text-3xl font-bold">
                    VS
                  </div>

                  <div className="text-center">

                    <h3 className="font-bold text-lg">
                      {match.strAwayTeam}
                    </h3>

                    <p className="text-5xl text-red-400 font-bold mt-3">
                      {match.intAwayScore ?? "-"}
                    </p>

                  </div>

                </div>

                <div className="mt-8 text-center text-gray-300">

                  <p>{match.dateEvent}</p>

                  <p>{match.strLeague}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default LiveScores;