import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function PlayerDetails() {

  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPlayer = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
        );

        const data = await response.json();

        setPlayer(data.players?.[0]);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchPlayer();

  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!player) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Player Not Found 😔
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div
        className="
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden
        "
      >

        <img
          src={
            player.strCutout ||
            player.strThumb ||
            player.strRender
          }
          alt={player.strPlayer}
          className="
          w-full
          h-[450px]
          object-contain
          bg-gray-100
          "
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-6">
            👤 {player.strPlayer}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <p>
              <strong>Sport:</strong>{" "}
              {player.strSport}
            </p>

            <p>
              <strong>Team:</strong>{" "}
              {player.strTeam}
            </p>

            <p>
              <strong>Nationality:</strong>{" "}
              {player.strNationality}
            </p>

            <p>
              <strong>Birth Date:</strong>{" "}
              {player.dateBorn}
            </p>

            <p>
              <strong>Gender:</strong>{" "}
              {player.strGender}
            </p>

            <p>
              <strong>Position:</strong>{" "}
              {player.strPosition}
            </p>

            <p>
              <strong>Height:</strong>{" "}
              {player.strHeight}
            </p>

            <p>
              <strong>Weight:</strong>{" "}
              {player.strWeight}
            </p>

          </div>

          <div className="mt-8">

            <h2 className="text-3xl font-bold mb-4">
              Biography
            </h2>

            <p className="text-gray-700 leading-8">
              {player.strDescriptionEN
                ? player.strDescriptionEN.slice(
                    0,
                    1500
                  )
                : "No biography available."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PlayerDetails;