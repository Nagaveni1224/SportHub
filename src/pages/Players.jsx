import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

function Players() {
  const { sport } = useParams();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultPlayers = {
    football: "Messi",
    cricket: "Virat",
    basketball: "LeBron",
    baseball: "Judge",
    volleyball: "Ngapeth",
    hockey: "Harmanpreet",
    rugby: "Beauden",
  };

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

  const [search, setSearch] = useState(defaultPlayers[sport] || "");
  const [debouncedSearch, setDebouncedSearch] = useState(
    defaultPlayers[sport] || ""
  );

  useEffect(() => {
    const value = defaultPlayers[sport] || "";
    setSearch(value);
    setDebouncedSearch(value);
  }, [sport]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${debouncedSearch}`
        );

        setPlayers(data.player || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch players.");
      } finally {
        setLoading(false);
      }
    };

    if (debouncedSearch.trim()) {
      fetchPlayers();
    }
  }, [debouncedSearch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <h1 className="text-3xl">{error}</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${sportBackgrounds[sport]})`,
      }}
    >
      <div className="min-h-screen bg-black/75">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              👤 {sport?.toUpperCase()} PLAYERS
            </h1>

            <p className="text-xl text-gray-200">
              Search and explore famous {sport} players
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-14">
            <input
              type="text"
              placeholder="🔍 Search Player..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                px-6
                py-4
                rounded-2xl
                text-lg
                bg-white
                text-black
                shadow-2xl
                outline-none
                focus:ring-4
                focus:ring-blue-400
              "
            />
          </div>

          {!loading && players.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-4xl font-bold text-white">
                No Players Found 😔
              </h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <Link
                key={player.idPlayer}
                to={`/player/${player.idPlayer}`}
              >
                <div
                  className="
                    bg-white/10
                    backdrop-blur-lg
                    rounded-3xl
                    border
                    border-white/20
                    p-6
                    text-center
                    text-white
                    shadow-2xl
                    hover:scale-105
                    hover:bg-white/20
                    transition-all
                    duration-300
                    h-full
                  "
                >
                  <img
                    src={
                      player.strCutout ||
                      player.strThumb ||
                      "https://via.placeholder.com/300"
                    }
                    alt={player.strPlayer}
                    className="
                      w-40
                      h-40
                      rounded-full
                      object-cover
                      mx-auto
                      mb-5
                      border-4
                      border-white/30
                    "
                  />

                  <h2 className="text-2xl font-bold">
                    {player.strPlayer}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    🌍 {player.strNationality || "Unknown"}
                  </p>

                  <p className="text-gray-300">
                    🏅 {player.strSport}
                  </p>

                  {player.strTeam && (
                    <p className="text-gray-300">
                      🏆 {player.strTeam}
                    </p>
                  )}

                  <button
                    className="
                      mt-6
                      bg-white
                      text-black
                      px-6
                      py-3
                      rounded-xl
                      font-bold
                      hover:bg-yellow-300
                      transition
                    "
                  >
                    View Details →
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

export default Players;