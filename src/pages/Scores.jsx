function Scores() {

  const matches = [
    {
      team1: "India",
      team2: "Australia",
      score: "280/6"
    },
    {
      team1: "Barcelona",
      team2: "Real Madrid",
      score: "2 - 1"
    },
    {
      team1: "Lakers",
      team2: "Warriors",
      score: "102 - 98"
    }
  ];

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Live Scores
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {matches.map((match,index)=>(

          <div
            key={index}
            className="
            bg-white
            rounded-xl
            shadow-lg
            p-6
            text-center
            "
          >

            <h2 className="text-xl font-bold">
              {match.team1}
            </h2>

            <p>VS</p>

            <h2 className="text-xl font-bold">
              {match.team2}
            </h2>

            <p className="mt-4 text-green-600 font-bold">
              {match.score}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Scores;