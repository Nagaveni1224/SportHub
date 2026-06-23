import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  if (loading) return <Loading />;

  return (
    <div className="max-w-5xl mx-auto p-6">

      <img
        src={player?.strThumb}
        alt={player?.strPlayer}
        className="w-full max-h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {player?.strPlayer}
      </h1>

      <p className="mt-3">
        Team: {player?.strTeam}
      </p>

      <p>
        Nationality: {player?.strNationality}
      </p>

      <p>
        Birth Date: {player?.dateBorn}
      </p>

      <p className="mt-4">
        {player?.strDescriptionEN}
      </p>

    </div>
  );
}

export default PlayerDetails;