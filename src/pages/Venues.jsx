import { useParams } from "react-router-dom";

function Venues() {
  const { sport } = useParams();

  const venueData = {
    football: [
      {
        name: "Old Trafford",
        location: "Manchester, England",
        capacity: "74,310",
      },
      {
        name: "Camp Nou",
        location: "Barcelona, Spain",
        capacity: "99,354",
      },
      {
        name: "Anfield",
        location: "Liverpool, England",
        capacity: "61,276",
      },
    ],

    cricket: [
      {
        name: "M. Chinnaswamy Stadium",
        location: "Bengaluru, India",
        capacity: "40,000",
      },
      {
        name: "Wankhede Stadium",
        location: "Mumbai, India",
        capacity: "33,000",
      },
      {
        name: "Eden Gardens",
        location: "Kolkata, India",
        capacity: "68,000",
      },
    ],

    basketball: [
      {
        name: "Madison Square Garden",
        location: "New York, USA",
        capacity: "19,800",
      },
      {
        name: "Crypto.com Arena",
        location: "Los Angeles, USA",
        capacity: "20,000",
      },
    ],

    baseball: [
      {
        name: "Yankee Stadium",
        location: "New York, USA",
        capacity: "46,537",
      },
      {
        name: "Dodger Stadium",
        location: "Los Angeles, USA",
        capacity: "56,000",
      },
    ],

    volleyball: [
      {
        name: "Ariake Arena",
        location: "Tokyo, Japan",
        capacity: "15,000",
      },
    ],

    hockey: [
      {
        name: "Rogers Arena",
        location: "Vancouver, Canada",
        capacity: "18,910",
      },
    ],

    rugby: [
      {
        name: "Twickenham Stadium",
        location: "London, England",
        capacity: "82,000",
      },
    ],
  };

  const venues = venueData[sport] || [];

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920')",
      }}
    >
      <div className="min-h-screen bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-14">

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              🏟️ {sport?.toUpperCase()} VENUES
            </h1>

            <p className="text-xl text-gray-200">
              Explore famous stadiums and sports venues
            </p>

          </div>

          {venues.length === 0 && (
            <div className="text-center py-10">
              <h2 className="text-3xl font-bold text-white">
                No Venues Found 😔
              </h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {venues.map((venue, index) => (
              <div
                key={index}
                className="
                  backdrop-blur-md
                  bg-white/10
                  border
                  border-white/20
                  rounded-3xl
                  p-8
                  text-center
                  text-white
                  shadow-2xl
                  hover:scale-105
                  hover:bg-white/20
                  transition-all
                  duration-300
                "
              >
                <div className="text-7xl mb-5">
                  🏟️
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {venue.name}
                </h2>

                <p className="text-gray-300 mb-2">
                  📍 {venue.location}
                </p>

                <p className="font-semibold text-yellow-300">
                  👥 Capacity: {venue.capacity}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Venues;