import { Link } from "react-router-dom";

function Sports() {
  const sports = [
    {
      name: "Football",
      slug: "football",
      emoji: "⚽",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "Cricket",
      slug: "cricket",
      emoji: "🏏",
      color: "from-green-600 to-emerald-500",
    },
    {
      name: "Basketball",
      slug: "basketball",
      emoji: "🏀",
      color: "from-orange-600 to-yellow-500",
    },
    {
      name: "Baseball",
      slug: "baseball",
      emoji: "⚾",
      color: "from-red-600 to-pink-500",
    },
    {
      name: "Volleyball",
      slug: "volleyball",
      emoji: "🏐",
      color: "from-purple-600 to-fuchsia-500",
    },
    {
      name: "Hockey",
      slug: "hockey",
      emoji: "🏑",
      color: "from-cyan-600 to-sky-500",
    },
    {
      name: "Rugby",
      slug: "rugby",
      emoji: "🏉",
      color: "from-indigo-600 to-violet-500",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920')",
      }}
    >
      <div className="min-h-screen bg-black/75">

        <div className="max-w-7xl mx-auto px-6 py-16">

        
        
<div className="flex flex-col items-center justify-center text-center mb-12">

  <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-5">
    Explore Sports 🏆
  </h1>

  <p className="w-full max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed">
    Discover players, teams, leagues, live scores,
    venues and highlights from sports around the world.
  </p>

</div>         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {sports.map((sport) => (
              <Link
                key={sport.slug}
                to={`/sports/${sport.slug}`}
              >
                <div
                  className={`
                    bg-gradient-to-br ${sport.color}
                    rounded-3xl
                    p-8
                    shadow-2xl
                    text-white
                    h-full
                    flex flex-col
                    items-center
                    text-center
                    hover:scale-105
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  `}
                >

                  <div className="text-8xl mb-6">
                    {sport.emoji}
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    {sport.name}
                  </h2>

                  <p className="text-white/90 leading-relaxed mb-8">
                    Explore teams, players,
                    live scores, venues and highlights.
                  </p>

                  <button
                    className="
                      w-full
                      bg-white
                      text-black
                      font-bold
                      py-3
                      rounded-xl
                      hover:bg-yellow-300
                      transition
                    "
                  >
                    Explore →
                  </button>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Sports;