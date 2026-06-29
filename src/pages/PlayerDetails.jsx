import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function PlayerDetails() {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
        );

        const data = await response.json();
        setPlayer(data.players?.[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <Loading />;

  if (!player) {
    return (
      <h1 className="text-center text-3xl font-bold mt-16">
        Player Not Found 😔
      </h1>
    );
  }

  const details = [
    { label: "⚽ Sport", value: player.strSport },
    { label: "🏆 Team", value: player.strTeam },
    { label: "🌍 Nationality", value: player.strNationality },
    { label: "🎂 Birth Date", value: player.dateBorn },
    { label: "👤 Gender", value: player.strGender },
    { label: "📍 Position", value: player.strPosition },
    { label: "📏 Height", value: player.strHeight },
    { label: "⚖️ Weight", value: player.strWeight },
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-[1500px] mx-auto px-8 lg:px-12">

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Player Image */}
          <div className="bg-gray-100 flex justify-center">

            <img
              src={
                player.strThumb ||
                player.strCutout ||
                player.strRender
              }
              alt={player.strPlayer}
              className="w-full h-[520px] object-contain p-6"
            />

          </div>

          {/* Player Name */}

          <div className="py-10 text-center">

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800">
              {player.strPlayer}
            </h1>

            <div className="w-32 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>

          </div>

          {/* Information */}

          <div className="px-8 pb-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {details.map((item, index) => (

                <div
                  key={index}
                  className="bg-blue-50 border border-blue-200 rounded-xl shadow-md hover:bg-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-20 flex flex-col justify-center items-center text-center px-4"
                >

                  <h3 className="text-base font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    {item.label}
                  </h3>

                  <p className="text-xl font-bold text-gray-900 text-center leading-8">
                    {item.value || "N/A"}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Biography */}

        <div className="bg-white rounded-3xl shadow-xl mt-28 mb-28 px-20 py-20">

          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-14">
            📖 Biography
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-9 text-justify px-4">
            {player.strDescriptionEN
              ? player.strDescriptionEN.slice(0, 2200)
              : "No biography available."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default PlayerDetails;