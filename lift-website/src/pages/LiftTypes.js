import React from "react";

const LiftTypes = () => {
  const types = ["Passenger Lift", "Goods Lift", "Home Lift", "Hospital Lift"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Types of Lifts We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((type) => (
          <div key={type} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{type}</h3>
            <img src="https://th.bing.com/th/id/OIP.r03053QxyZVPvIeTMp1fGwHaJ4?rs=1&pid=ImgDetMain" alt={type} className="rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiftTypes;