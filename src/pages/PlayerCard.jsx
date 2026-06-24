import { Link } from "react-router-dom";

function PlayerCard({ player }) {
  return (
    <Link to={`/player/${player.idPlayer}`}>
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
          src={
            player.strCutout ||
            player.strThumb ||
            "https://via.placeholder.com/300x300"
          }
          alt={player.strPlayer}
          className="
          w-40
          h-40
          object-cover
          rounded-full
          mx-auto
          mb-4
          "
        />

        <h2 className="text-xl font-bold">
          {player.strPlayer}
        </h2>

        <p className="text-gray-500">
          {player.strSport}
        </p>

        <p className="text-gray-500">
          {player.strNationality}
        </p>

        <p className="text-blue-600 font-semibold mt-3">
          View Details →
        </p>
      </div>
    </Link>
  );
}

export default PlayerCard;