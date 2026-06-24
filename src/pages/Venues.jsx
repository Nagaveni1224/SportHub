import { useParams } from "react-router-dom";

function Venues() {
  const { sport } = useParams();

  const venueData = {
    football: [
      {
        name: "Old Trafford",
        location: "Manchester, England",
        capacity: "74,310"
      },
      {
        name: "Camp Nou",
        location: "Barcelona, Spain",
        capacity: "99,354"
      },
      {
        name: "Anfield",
        location: "Liverpool, England",
        capacity: "61,276"
      }
    ],

    cricket: [
      {
        name: "M. Chinnaswamy Stadium",
        location: "Bengaluru, India",
        capacity: "40,000"
      },
      {
        name: "Wankhede Stadium",
        location: "Mumbai, India",
        capacity: "33,000"
      },
      {
        name: "Eden Gardens",
        location: "Kolkata, India",
        capacity: "68,000"
      }
    ],

    basketball: [
      {
        name: "Madison Square Garden",
        location: "New York, USA",
        capacity: "19,800"
      },
      {
        name: "Crypto.com Arena",
        location: "Los Angeles, USA",
        capacity: "20,000"
      }
    ],

    baseball: [
      {
        name: "Yankee Stadium",
        location: "New York, USA",
        capacity: "46,537"
      },
      {
        name: "Dodger Stadium",
        location: "Los Angeles, USA",
        capacity: "56,000"
      }
    ],

    volleyball: [
      {
        name: "Ariake Arena",
        location: "Tokyo, Japan",
        capacity: "15,000"
      }
    ],

    hockey: [
      {
        name: "Rogers Arena",
        location: "Vancouver, Canada",
        capacity: "18,910"
      }
    ],

    rugby: [
      {
        name: "Twickenham Stadium",
        location: "London, England",
        capacity: "82,000"
      }
    ]
  };

  const venues = venueData[sport] || [];

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-3">
        🏟️ {sport?.toUpperCase()} VENUES
      </h1>

      <p className="text-center text-xl text-gray-600 font-semibold mb-10">
        Explore famous stadiums and sports venues
      </p>

      {venues.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-500">
            No venues found 😔
          </h2>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">

        {venues.map((venue, index) => (

          <div
  key={index}
  className="
  bg-white
  rounded-2xl
  shadow-xl
  p-8
  hover:scale-105
  hover:shadow-2xl
  duration-300
  border
  text-center
  "
>

  <div className="text-6xl mb-4">
    🏟️
  </div>

  <h2 className="text-2xl font-bold mb-4">
    {venue.name}
  </h2>

  <p className="text-gray-600 mb-2">
    📍 {venue.location}
  </p>

  <p className="font-semibold text-blue-600">
    👥 Capacity: {venue.capacity}
  </p>

</div>

        ))}

      </div>

    </div>
  );
}

export default Venues;