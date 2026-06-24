import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

  const [search, setSearch] = useState(defaultPlayers[sport] || "");
  const [debouncedSearch, setDebouncedSearch] = useState(defaultPlayers[sport] || "");

  // Reset when sport changes
  useEffect(() => {
    const defaultValue = defaultPlayers[sport] || "";
    setSearch(defaultValue);
    setDebouncedSearch(defaultValue);
  }, [sport]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch players
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${debouncedSearch}`
        );

        const data = await response.json();
        setPlayers(data.player || []);
      } catch (err) {
        setError("Failed to fetch players");
      } finally {
        setLoading(false);
      }
    };

    if (debouncedSearch.trim()) {
      fetchPlayers();
    }
  }, [debouncedSearch]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        👤 {sport?.toUpperCase()} PLAYERS
      </h1>

      <p className="text-center text-xl text-gray-600 mb-8">
        Search and explore famous {sport} players
      </p>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search Player..."
        className="w-full border p-4 rounded-xl shadow-md mb-10 text-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* No players */}
      {!loading && players.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-500">
            No Players Found 😔
          </h2>
        </div>
      )}

      {/* Player cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {players.map((player) => (
          <Link key={player.idPlayer} to={`/player/${player.idPlayer}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 hover:shadow-2xl duration-300 border cursor-pointer">

              <img
                src={player.strCutout || player.strThumb || "https://via.placeholder.com/300"}
                alt={player.strPlayer}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />

              <h2 className="text-2xl font-bold">
                {player.strPlayer}
              </h2>

              <p className="text-gray-500">
                {player.strNationality}
              </p>

              <p className="text-gray-500">
                {player.strSport}
              </p>

              <p className="text-blue-600 font-bold mt-3">
                View Details →
              </p>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Players;