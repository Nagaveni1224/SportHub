import { useParams, Link } from "react-router-dom";

function SportDetails() {
  const { sport } = useParams();

  const sportIcons = {
    football: "⚽",
    cricket: "🏏",
    basketball: "🏀",
    baseball: "⚾",
    volleyball: "🏐",
    hockey: "🏑",
    rugby: "🏉",
  };

  const dashboardItems = [
    {
      title: "Players",
      emoji: "👤",
      desc: `View top players of ${sport}`,
      path: "players",
    },
    {
      title: "Teams",
      emoji: "🏆",
      desc: "Browse famous teams",
      path: "teams",
    },
    {
      title: "Live Scores",
      emoji: "📊",
      desc: "Check ongoing matches",
      path: "livescores",
    },
    {
      title: "Leagues",
      emoji: "🥇",
      desc: "Explore leagues and tournaments",
      path: "leagues",
    },
    {
      title: "Venues",
      emoji: "🏟️",
      desc: "Famous stadiums and grounds",
      path: "venues",
    },
    {
      title: "Highlights",
      emoji: "🎥",
      desc: "Match highlights and moments",
      path: "highlights",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-10 min-h-screen">
      <h1 className="text-6xl font-extrabold text-center mb-4">
        {sportIcons[sport]} {sport.toUpperCase()}
      </h1>

      <p className="text-center text-2xl font-semibold text-gray-600 mb-12">
        Explore Players, Teams, Live Scores, Leagues,
        Venues and Highlights
      </p>

      <Link
        to="/sports"
        className="
          inline-block
          mb-8
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-700
        "
      >
        ← Back to Sports
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        {dashboardItems.map((item) => (
          <Link
            key={item.title}
            to={`/sports/${sport}/${item.path}`}
          >
            <div
              className="
                group
                bg-white
                rounded-3xl
                shadow-xl
                p-8
                text-center
                hover:scale-105
                hover:shadow-2xl
                hover:bg-blue-600
                hover:text-white
                duration-300
                cursor-pointer
                border
              "
            >
              <div className="text-5xl mb-4">
                {item.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p
                className="
                  text-gray-600
                  group-hover:text-white
                "
              >
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SportDetails;