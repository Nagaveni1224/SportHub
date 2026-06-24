function Home() {
  const features = [
    {
      icon: "⚽",
      title: "Sports",
      desc: "Explore Football, Cricket, Basketball and more.",
    },
    {
      icon: "👤",
      title: "Players",
      desc: "Search famous players and view details.",
    },
    {
      icon: "🏆",
      title: "Teams",
      desc: "Browse teams from different leagues.",
    },
    {
      icon: "📊",
      title: "Live Scores",
      desc: "Check match scores and results.",
    },
    {
      icon: "🥇",
      title: "Leagues",
      desc: "Explore tournaments and competitions.",
    },
    {
      icon: "🏟️",
      title: "Venues",
      desc: "Discover famous stadiums and arenas.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-950
        via-purple-900
        to-blue-600
        text-white
        relative
        overflow-hidden
        py-16
        px-6
      "
    >
      {/* Decorative Circles */}
      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 rounded-full -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-400 opacity-20 rounded-full -bottom-32 -right-20"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-center">
          🏆 SportsHub
        </h1>

        {/* Description */}
        <p
          className="
            text-2xl
            md:text-3xl
            font-medium
            max-w-4xl
            text-center
            leading-relaxed
            mb-16
          "
        >
          Discover Players, Live Scores, Leagues,
          Venues and Sports Analytics —
          All in One Place.
        </p>

        {/* Feature Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            max-w-6xl
            w-full
            mx-auto
            place-items-center
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-2xl
                p-8
                w-full
                max-w-sm
                text-center
                hover:scale-105
                hover:bg-white/20
                hover:shadow-2xl
                duration-300
                cursor-pointer
              "
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {feature.title}
              </h2>

              <p className="text-gray-200">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;