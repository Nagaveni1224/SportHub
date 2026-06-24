import { Link } from "react-router-dom";

function Sports() {
  const sports = [
    { name: "Football", slug: "football", emoji: "⚽" },
    { name: "Cricket", slug: "cricket", emoji: "🏏" },
    { name: "Basketball", slug: "basketball", emoji: "🏀" },
    { name: "Baseball", slug: "baseball", emoji: "⚾" },
    { name: "Volleyball", slug: "volleyball", emoji: "🏐" },
    { name: "Hockey", slug: "hockey", emoji: "🏑" },
    { name: "Rugby", slug: "rugby", emoji: "🏉" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto py-16 pb-40">
        <div className="text-center mb-32">
          <h1
            className="
              text-6xl
              font-extrabold
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            Explore Sports 🏆
          </h1>

          <p
            className="
              text-2xl
              font-bold
              text-gray-700
              mt-6
              text-center
            "
          >
            Choose your favorite sport and discover players,
            leagues, live scores, venues, highlights and more.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              to={`/sports/${sport.slug}`}
            >
              <div
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-8
                  text-center
                  hover:scale-105
                  hover:bg-blue-600
                  hover:text-white
                  duration-300
                  cursor-pointer
                "
              >
                <div className="text-6xl mb-4">
                  {sport.emoji}
                </div>

                <h3 className="text-2xl font-bold">
                  {sport.name}
                </h3>

                <p className="mt-2 text-sm">
                  Click to Explore
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;