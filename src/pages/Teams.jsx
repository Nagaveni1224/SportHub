import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

  useEffect(() => {

    setLoading(true);

    const fetchTeams = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${encodeURIComponent(
            leagues[sport] || "English Premier League"
          )}`
        );

        const data = await response.json();

        setTeams(data.teams || []);

      } catch (error) {

        console.error("Error fetching teams:", error);
        setTeams([]);

      } finally {

        setLoading(false);

      }
    };

    fetchTeams();

  }, [sport]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        🏆 {sport?.toUpperCase()} TEAMS
      </h1>

      <p className="text-center text-gray-600 text-xl font-semibold mb-10">
        Explore famous teams from {sport}
      </p>

      {teams.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-500">
            No teams found 😔
          </h2>

          <p className="text-gray-400 mt-2">
            No team data available for {sport}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-4 gap-6">

        {teams.map((team) => (

          <Link
            key={team.idTeam}
            to={`/team/${team.idTeam}`}
          >

            <div
              className="
              bg-white
              rounded-2xl
              shadow-xl
              p-6
              text-center
              hover:scale-105
              hover:shadow-2xl
              duration-300
              border
              cursor-pointer
              "
            >

              <img
                src={team.strBadge}
                alt={team.strTeam}
                className="
                w-24
                h-24
                object-contain
                mx-auto
                mb-4
                "
              />

              <h2 className="font-bold text-xl">
                {team.strTeam}
              </h2>

              <p className="text-gray-500">
                {team.strCountry}
              </p>

              <p className="text-blue-600 font-semibold mt-3">
                View Details →
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default Teams;