import { useParams } from "react-router-dom";

function Highlights() {
  const { sport } = useParams();

  const highlightData = {
    football: [
      "⚽ Messi scores a stunning free kick",
      "🔥 Premier League Match Highlights",
      "🏆 Champions League Final Moments"
    ],

    cricket: [
      "🏏 Virat Kohli Century Highlights",
      "🔥 IPL Best Sixes Compilation",
      "🏆 India vs Australia Match Highlights"
    ],

    basketball: [
      "🏀 LeBron James Top Plays",
      "🔥 NBA Dunk Highlights",
      "🏆 NBA Finals Best Moments"
    ],

    baseball: [
      "⚾ Home Run Highlights",
      "🔥 MLB Top Plays",
      "🏆 World Series Highlights"
    ],

    volleyball: [
      "🏐 Amazing Volleyball Spikes",
      "🔥 Nations League Highlights",
      "🏆 Championship Final Moments"
    ],

    hockey: [
      "🏑 Top Goals Compilation",
      "🔥 Hockey World Cup Highlights",
      "🏆 Tournament Best Moments"
    ],

    rugby: [
      "🏉 Best Rugby Tries",
      "🔥 Super Rugby Highlights",
      "🏆 Championship Winning Moments"
    ]
  };

  const highlights = highlightData[sport] || [];

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        🎥 {sport?.toUpperCase()} HIGHLIGHTS
      </h1>

      <p className="text-center text-xl text-gray-600 font-semibold mb-10">
        Watch the most exciting moments from {sport}
      </p>

      {highlights.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-500">
            No highlights available 😔
          </h2>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">

        {highlights.map((highlight, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-2xl
            shadow-xl
            p-8
            text-center
            hover:scale-105
            hover:bg-red-500
            hover:text-white
            duration-300
            border
            "
          >

            <div className="text-6xl mb-4">
              🎬
            </div>

            <h2 className="text-xl font-bold">
              {highlight}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Highlights;