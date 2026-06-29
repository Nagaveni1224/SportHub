import { useParams, Link } from "react-router-dom";

function SportDetails() {
  const { sport } = useParams();

  const sportData = {
    football: {
      icon: "⚽",
      bg: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600",
    },
    cricket: {
      icon: "🏏",
      bg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600",
    },
    basketball: {
      icon: "🏀",
      bg: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600",
    },
    baseball: {
      icon: "⚾",
      bg: "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=1600",
    },
    volleyball: {
      icon: "🏐",
      bg: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600",
    },
    hockey: {
      icon: "🏑",
      bg: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1600",
    },
    rugby: {
      icon: "🏉",
      bg: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600",
    },
  };

  const dashboardItems = [
    {
      title: "Players",
      emoji: "👤",
      desc: "Discover top players",
      path: "players",
    },
    {
      title: "Teams",
      emoji: "🏆",
      desc: "Explore famous teams",
      path: "teams",
    },
    {
      title: "Live Scores",
      emoji: "📊",
      desc: "Check live match updates",
      path: "livescores",
    },
    {
      title: "Leagues",
      emoji: "🥇",
      desc: "View leagues & tournaments",
      path: "leagues",
    },
    {
      title: "Venues",
      emoji: "🏟️",
      desc: "Explore stadiums & grounds",
      path: "venues",
    },
    {
      title: "Highlights",
      emoji: "🎥",
      desc: "Watch match highlights",
      path: "highlights",
    },
  ];

  const currentSport = sportData[sport];

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentSport?.bg})`,
      }}
    >
      <div className="min-h-screen bg-black/75">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center pb-20">

            <div className="text-7xl mb-6">
              {currentSport?.icon}
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8">
              {sport.charAt(0).toUpperCase() + sport.slice(1)}
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed">
              Discover players, teams, leagues, live scores,
              venues and highlights.
            </p>

          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {dashboardItems.map((item) => (
              <Link
                key={item.title}
                to={`/sports/${sport}/${item.path}`}
              >
                <div
                  className="
                    backdrop-blur-md
                    bg-white/10
                    border
                    border-white/20
                    rounded-3xl
                    p-8
                    h-full
                    shadow-2xl
                    hover:scale-105
                    hover:bg-white/20
                    transition-all
                    duration-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-center
                    text-white
                  "
                >
                  <div className="text-6xl mb-5">
                    {item.emoji}
                  </div>

                  <h2 className="text-3xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-lg text-gray-200">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default SportDetails;