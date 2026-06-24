import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function TeamDetails() {

  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTeam = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${id}`
        );

        const data = await response.json();

        setTeam(data.teams?.[0]);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchTeam();

  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!team) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Team Not Found 😔
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="bg-blue-900 text-white p-8 text-center">

          <img
            src={team.strBadge}
            alt={team.strTeam}
            className="w-40 h-40 mx-auto object-contain mb-4"
          />

          <h1 className="text-5xl font-bold">
            {team.strTeam}
          </h1>

        </div>

        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <p>
              <strong>Country:</strong>{" "}
              {team.strCountry}
            </p>

            <p>
              <strong>League:</strong>{" "}
              {team.strLeague}
            </p>

            <p>
              <strong>Sport:</strong>{" "}
              {team.strSport}
            </p>

            <p>
              <strong>Stadium:</strong>{" "}
              {team.strStadium}
            </p>

            <p>
              <strong>Formed Year:</strong>{" "}
              {team.intFormedYear}
            </p>

            <p>
              <strong>Website:</strong>{" "}
              {team.strWebsite}
            </p>

          </div>

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-4">
              Team Description
            </h2>

            <p className="text-gray-700 leading-8">
              {team.strDescriptionEN
                ? team.strDescriptionEN.slice(0, 2000)
                : "No description available."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeamDetails;