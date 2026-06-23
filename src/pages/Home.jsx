import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-blue-950
      via-purple-900
      to-blue-600
      text-white
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-6
      relative
      overflow-hidden
      "
    >
      {/* Decorative Circles */}
      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 rounded-full -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-400 opacity-20 rounded-full -bottom-32 -right-20"></div>

      {/* Main Content */}
      <div className="relative z-10">

        <h1
          className="
          text-6xl
          md:text-8xl
          font-extrabold
          mb-6
          "
        >
          🏆 SportsHub 
        </h1>

        

        <p
          className="
          text-2xl
          md:text-3xl
          font-medium
          max-w-4xl
          mx-auto
          leading-relaxed
          "
        >
          Discover Players, Live Scores, Leagues,
          Venues and Sports Analytics —
          All in One Place.
        </p>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-6
          mt-12
          "
        >
        
        </div>

        {/* Sports Icons Row */}
        <div
          className="
          flex
          justify-center
          gap-8
          mt-16
          text-5xl
          "
        >
          <span>⚽</span>
          <span>🏏</span>
          <span>🏀</span>
          <span>🏉</span>
          <span>🏐</span>
          <span>🏑</span>
        </div>

      </div>
    </section>
  );
}

export default Home;