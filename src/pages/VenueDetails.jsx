import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function VenueDetails() {

  const { id } = useParams();

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchVenue = async () => {

      try {

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/lookupvenue.php?id=${id}`
        );

        const data = await response.json();

        setVenue(data.venues?.[0]);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchVenue();

  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!venue) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Venue Not Found 😔
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src={
            venue.strThumb ||
            "https://via.placeholder.com/1200x500"
          }
          alt={venue.strVenue}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-6">
            🏟️ {venue.strVenue}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <p>
              <strong>Country:</strong>{" "}
              {venue.strCountry}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {venue.strCity}
            </p>

            <p>
              <strong>Capacity:</strong>{" "}
              {venue.intCapacity}
            </p>

            <p>
              <strong>Sport:</strong>{" "}
              {venue.strSport}
            </p>

          </div>

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-4">
              Venue Description
            </h2>

            <p className="text-gray-700 leading-8">
              {venue.strDescriptionEN ||
                "No description available."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default VenueDetails;