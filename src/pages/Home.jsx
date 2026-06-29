import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "👥",
      title: "Teams",
      desc: "Explore top teams from different sports.",
    },
    {
      icon: "👤",
      title: "Players",
      desc: "Discover famous players worldwide.",
    },
    {
      icon: "📊",
      title: "Live Scores",
      desc: "Track live scores and updates.",
    },
    {
      icon: "🏆",
      title: "Leagues",
      desc: "Browse tournaments and leagues.",
    },
    {
      icon: "🏟️",
      title: "Venues",
      desc: "Discover stadiums and arenas.",
    },
    {
      icon: "⚽",
      title: "Sports",
      desc: "Football, Cricket, Basketball and many more.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
<div className="max-w-7xl mx-auto px-16 lg:px-24 py-10 w-full">
              <div className="max-w-4xl">
<span className="inline-flex items-center justify-center bg-blue-600 text-white min-w-[280px] py-4 rounded-full text-lg font-bold tracking-wider shadow-lg">
  ALL SPORTS IN ONE PLACE
</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-8 leading-tight">
                Discover.
                <br />
                Explore.
                <br />
                <span className="text-blue-400">Stay Ahead.</span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-200 mt-8 leading-relaxed">
                Explore players, teams, live scores, leagues, venues and sports
                analytics from around the world in one place.
              </p>

              <div className="mt-14">
                <Link
  to="/sports"
  className="inline-flex items-center justify-center min-w-[260px] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg transition duration-300"
>
  Explore Sports Categories
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col items-center text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
    Everything About Sports in One Place
  </h2>

  <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-8">
    Explore players, teams, sports, leagues, venues and live updates with a modern and easy-to-use experience.
  </p>
</div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <Link
                key={index}
                to="/sports"
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;