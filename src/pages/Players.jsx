import { useState, useEffect } from "react";

import PlayerCard from "../components/PlayerCard";
import Loading from "../components/Loading";

function Players() {

  const [players, setPlayers] = useState([]);

  const [search, setSearch] = useState("Virat");

  const [debouncedSearch, setDebouncedSearch] =
    useState("Virat");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // Debounce Search
  useEffect(() => {

    const timer = setTimeout(() => {

      setDebouncedSearch(search);

    }, 500);

    return () => clearTimeout(timer);

  }, [search]);

  // Fetch Players
  useEffect(() => {

    const fetchPlayers = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${debouncedSearch}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch players"
          );
        }

        const data =
          await response.json();

        setPlayers(
          data.player || []
        );

      }
      catch (err) {

        setError(err.message);

      }
      finally {

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
      <h1
        className="
        text-center
        text-red-500
        text-2xl
        mt-10
        "
      >
        {error}
      </h1>
    );
  }

  return (

    <div
      className="
      max-w-7xl
      mx-auto
      p-6
      "
    >

      <h1
        className="
        text-5xl
        font-bold
        text-center
        mb-10
        "
      >
        Players ⚽
      </h1>

      <input
        type="text"
        placeholder="Search Player..."
        className="
        w-full
        border
        border-gray-300
        p-4
        rounded-xl
        shadow-md
        mb-10
        text-lg
        "
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      {!loading &&
        players.length === 0 && (
          <h2
            className="
            text-center
            text-2xl
            text-gray-500
            "
          >
            No Players Found 😔
          </h2>
        )
      }

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >

        {players.map((player) => (

          <PlayerCard
            key={player.idPlayer}
            player={player}
          />

        ))}

      </div>

    </div>
  );
}

export default Players;