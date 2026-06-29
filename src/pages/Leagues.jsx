import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

function Leagues() {
  const { sport } = useParams();

  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const fetchLeagues = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?s=${sport}`
        );

        setLeagues(response.data.countries || []);
      } catch (error) {
        console.error(error);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
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
              🏆 {sport?.toUpperCase()} LEAGUES
            </h1>

            <p className="text-xl text-gray-200">
              Explore the biggest leagues and tournaments in {sport}.
            </p>

          </div>

          {leagues.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-4xl text-white font-bold">
                No Leagues Found 😔
              </h2>

            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {leagues.map((league) => (

              <div
                key={league.idLeague}
                className="
                backdrop-blur-md
                bg-white/10
                border
                border-white/20
                rounded-3xl
                p-8
                text-center
                text-white
                shadow-2xl
                hover:scale-105
                hover:bg-white/20
                transition-all
                duration-300
                "
              >

                <div className="text-6xl mb-5">
                  🏆
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {league.strLeague}
                </h2>

                <p className="text-gray-300">
                  Sport
                </p>

                <p className="font-semibold text-lg mb-4">
                  {league.strSport}
                </p>

                <p className="text-gray-300">
                  Country
                </p>

                <p className="font-semibold text-lg">
                  {league.strCountry || "International"}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Leagues;