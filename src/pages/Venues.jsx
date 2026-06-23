function Venues() {

  const venues = [
    "Wankhede Stadium",
    "Camp Nou",
    "Old Trafford",
    "Madison Square Garden",
    "Melbourne Cricket Ground",
    "Lord's Cricket Ground"
  ];

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-10
        "
      >
        Famous Venues
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >

        {venues.map((venue,index)=>(

          <div
            key={index}
            className="
            bg-white
            rounded-xl
            p-8
            shadow-lg
            hover:scale-105
            duration-300
            "
          >

            <h2 className="font-bold text-xl">
              {venue}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Venues;