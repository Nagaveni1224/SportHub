import { useParams } from "react-router-dom";

function Highlights() {
  const { sport } = useParams();

  const sportBackgrounds = {
    football:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600",
    cricket:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600",
    basketball:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600",
    baseball:
      "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=1600",
    volleyball:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600",
    hockey:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1600",
    rugby:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600",
  };

  const highlights = {
    football: [
      "⚽ Messi's Amazing Free Kick",
      "🏆 Champions League Final",
      "🔥 Premier League Best Goals",
      "🎯 Top 10 Goals of the Season",
      "🥅 Incredible Saves Compilation",
      "⭐ FIFA World Cup Highlights",
    ],

    cricket: [
      "🏏 Virat Kohli Century",
      "🔥 IPL Best Sixes",
      "🏆 India vs Australia Thriller",
      "💥 Fastest Fifties",
      "🎯 Best Bowling Spells",
      "👏 World Cup Final Highlights",
    ],

    basketball: [
      "🏀 NBA Top 10 Plays",
      "🔥 LeBron Best Dunks",
      "⭐ Stephen Curry Threes",
      "🏆 NBA Finals Highlights",
      "💥 Slam Dunk Contest",
      "🎯 Best Buzzer Beaters",
    ],

    baseball: [
      "⚾ Home Run Compilation",
      "🔥 MLB Top Plays",
      "🏆 World Series Highlights",
      "👏 Amazing Catches",
    ],

    volleyball: [
      "🏐 Powerful Spikes",
      "⭐ Nations League Highlights",
      "🏆 Championship Final",
      "🔥 Best Blocks",
    ],

    hockey: [
      "🏑 Top Goals",
      "🏆 Hockey World Cup",
      "🔥 Amazing Saves",
      "⭐ Best Moments",
    ],

    rugby: [
      "🏉 Best Tries",
      "🏆 Super Rugby Final",
      "🔥 Greatest Tackles",
      "⭐ Championship Highlights",
    ],
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${sportBackgrounds[sport]})`,
      }}
    >
      <div className="min-h-screen bg-black/80">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              🎥 {sport?.toUpperCase()} HIGHLIGHTS
            </h1>

            <p className="text-xl text-gray-200">
              Relive the most exciting moments in {sport}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {(highlights[sport] || []).map((item, index) => (

              <div
                key={index}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >

                <div className="text-6xl text-center mb-6">
                  🎬
                </div>

                <h2 className="text-2xl font-bold text-center mb-4">
                  Highlight {index + 1}
                </h2>

                <p className="text-center text-gray-200 leading-relaxed">
                  {item}
                </p>

                <button className="mt-8 w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                  Watch Highlight →
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Highlights;