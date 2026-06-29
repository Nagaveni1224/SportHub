import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

function Teams() {
  const { sport } = useParams();

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const leagues = {
    football: "English Premier League",
    cricket: "Indian Premier League",
    basketball: "NBA",
    baseball: "MLB",
    volleyball: "Volleyball",
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
    const fetchTeams = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${encodeURIComponent(
            leagues[sport] || "English Premier League"
          )}`
        );

        setTeams(response.data.teams || []);
      } catch (error) {
        console.error(error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
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

          {/* Heading */}

          <div className="text-center mb-12">

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              🏆 {sport?.toUpperCase()} TEAMS
            </h1>

            <p className="text-xl text-gray-200">
              Explore the most popular {sport} teams from around the world.
            </p>

          </div>

          {/* No Teams */}

          {teams.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-4xl text-white font-bold">
                No Teams Found 😔
              </h2>

            </div>
          )}

          {/* Teams Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {teams.map((team) => (
              <Link
                key={team.idTeam}
                to={`/team/${team.idTeam}`}
              >
                <div
                  className="
                  backdrop-blur-md
                  bg-white/10
                  border
                  border-white/20
                  rounded-3xl
                  p-6
                  text-center
                  text-white
                  shadow-2xl
                  hover:scale-105
                  hover:bg-white/20
                  transition-all
                  duration-300
                  h-full
                  "
                >

                  <img
                    src={
                      team.strBadge ||
                      "https://via.placeholder.com/150"
                    }
                    alt={team.strTeam}
                    className="
                    w-28
                    h-28
                    object-contain
                    mx-auto
                    mb-5
                    bg-white
                    rounded-full
                    p-2
                    "
                  />

                  <h2 className="text-2xl font-bold">
                    {team.strTeam}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    {team.strCountry}
                  </p>

                  <p className="text-gray-300">
                    {team.strLeague}
                  </p>

                  <button
                    className="
                    mt-5
                    bg-white
                    text-black
                    px-5
                    py-2
                    rounded-xl
                    font-bold
                    hover:bg-yellow-300
                    transition
                    "
                  >
                    View Team →
                  </button>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Teams;