"use client";

import { useArea } from "@/components/AreaContext";

const solarPanels = [
  {
    model: "SunPower X-Series 360W",
    type: "Monocrystalline",
    length: 1.7,
    width: 1.05,
    wattage: 360,
    efficiency: 0.85, // 85% efficiency
    image: "/sunpower.jpg",
  },
  {
    model: "LG NeON R 350W",
    type: "Monocrystalline",
    length: 1.7,
    width: 1.02,
    wattage: 350,
    efficiency: 0.85,
    image: "/lgneonr.webp",
  },
  {
    model: "Panasonic HIT 330W",
    type: "Heterojunction",
    length: 1.59,
    width: 1.05,
    wattage: 330,
    efficiency: 0.86,
    image: "/panasonic.jpg",
  },
  {
    model: "Canadian Solar 335W",
    type: "Polycrystalline",
    length: 1.99,
    width: 1.0,
    wattage: 335,
    efficiency: 0.80, // Polycrystalline panels have slightly lower efficiency
    image: "/canadian.webp",
  },
  {
    model: "REC Alpha 380W",
    type: "Monocrystalline",
    length: 1.75,
    width: 1.04,
    wattage: 380,
    efficiency: 0.88,
    image: "/rec.webp",
  },
];

export default function AreaResult() {
  const { selectedArea } = useArea();
  const sunlightHoursPerDay = 5; // Adjust based on location
  const costPerKWh = 5; // Price per kWh in ₹
  const installationCostPerPanel = 11450; // Estimated per panel cost

  if (!selectedArea || selectedArea <= 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-500 text-white text-xl font-bold p-6 rounded-lg">
          Invalid Area Selection
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-6 text">
        Your top 5 Solar Panel Options are: 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solarPanels.map((panel, index) => {
          const panelArea = panel.length * panel.width;
          const numPanels = Math.floor(selectedArea / panelArea); // Maximum fit

          if (numPanels <= 0) {
            return (
              <div key={index} className="bg-gray-300 p-4 rounded-lg text-center">
                <h3 className="text-lg font-bold text-black">{panel.model}</h3>
                <p className="text-red-500">No panels can fit in the selected area.</p>
              </div>
            );
          }

          const actualWattagePerPanel = panel.wattage * panel.efficiency;
          const totalSystemWattage = numPanels * actualWattagePerPanel;
          const dailyEnergy = (totalSystemWattage * sunlightHoursPerDay) / 1000; // kWh per day
          const monthlyEnergy = dailyEnergy * 30; // kWh per month
          const monthlySavings = monthlyEnergy * costPerKWh;
          const installationCost = numPanels * installationCostPerPanel;
          const paybackPeriod = installationCost / monthlySavings; // In months

          return (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <img src={panel.image} alt={panel.model} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold text-black mt-2">{panel.model}</h3>
              <p className="text-black">Type: {panel.type}</p>
              <p className="text-black">Panels Fit: {numPanels}</p>
              <p className="text-black">Daily Energy: {dailyEnergy.toFixed(2)} kWh</p>
              <p className="text-black">Monthly Savings: ₹{monthlySavings.toFixed(2)}</p>
              <p className="text-black">Installation Cost: ₹{installationCost.toFixed(2)}</p>
              <p className="text-black">
                Payback Period: {paybackPeriod.toFixed(1)} months
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
