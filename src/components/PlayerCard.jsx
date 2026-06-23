import { Link } from "react-router-dom";

function PlayerCard({ player }) {

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-lg
      overflow-hidden
      hover:scale-105
      duration-300
      "
    >

      <img
        src={
          player.strThumb ||
          "https://via.placeholder.com/300"
        }
        alt={player.strPlayer}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {player.strPlayer}
        </h2>

        <p>
          Team:
          {player.strTeam}
        </p>

        <p>
          Nationality:
          {player.strNationality}
        </p>

        <Link
          to={`/player/${player.idPlayer}`}
          className="
          inline-block
          mt-3
          bg-blue-600
          text-white
          px-4
          py-2
          rounded
          "
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default PlayerCard;