import { useParams } from "react-router-dom";

function SportDetails() {

  const { sport } = useParams();

  const sportIcons = {
    football: "⚽",
    cricket: "🏏",
    basketball: "🏀",
    baseball: "⚾",
    volleyball: "🏐",
    hockey: "🏑",
    rugby: "🏉"
  };

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        {sportIcons[sport]} {sport.toUpperCase()}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Players
          </h2>

          <p>
            View top players of {sport}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Teams
          </h2>

          <p>
            Browse famous teams
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Live Scores
          </h2>

          <p>
            Check ongoing matches
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Leagues
          </h2>

          <p>
            Explore leagues and tournaments
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Venues
          </h2>

          <p>
            Famous stadiums and grounds
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-3">
            Highlights
          </h2>

          <p>
            Match highlights and moments
          </p>
        </div>

      </div>

    </div>
  );
}

export default SportDetails;