"use client";

import { useArea } from "@/components/AreaContext";

const solarPanels = [
  {
    model: "SunPower X-Series 360W",
    type: "Monocrystalline",
    length: 1.7,
    width: 1.05,
    wattage: 360,
    image: "/sunpower.jpg",
  },
  {
    model: "LG NeON R 350W",
    type: "Monocrystalline",
    length: 1.7,
    width: 1.02,
    wattage: 350,   
    image: "/lgneonr.webp",
  },
  {
    model: "Panasonic HIT 330W",
    type: "Heterojunction",
    length: 1.59,
    width: 1.05,
    wattage: 330,
    image: "/panasonic.jpg",
  },
  {
    model: "Canadian Solar 335W",
    type: "Polycrystalline",
    length: 1.99,
    width: 1.0,
    wattage: 335,
    image: "/canadian.webp",
  },
  {
    model: "REC Alpha 380W",
    type: "Monocrystalline",
    length: 1.75,
    width: 1.04,
    wattage: 380,
    image: "/rec.webp",
  },
];

export default function AreaResult() {
  const { selectedArea } = useArea();
  const sunlightHoursPerDay = 5;
  const costPerKWh = 5;
  const installationCostPerPanel = 11450;

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
      <h2 className="text-center text-2xl font-bold mb-6">Solar Panel Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solarPanels.map((panel, index) => {
          const panelArea = panel.length * panel.width;
          const numPanels = Math.floor(selectedArea / panelArea);

          if (numPanels <= 0) {
            return (
              <div key={index} className="bg-gray-300 p-4 rounded-lg text-center">
                <h3 className="text-lg font-bold">{panel.model}</h3>
                <p className="text-red-500">No panels can fit in the selected area.</p>
              </div>
            );
          }

          const dailyEnergy = (numPanels * panel.wattage * sunlightHoursPerDay) / 1000;
          const dailyCost = dailyEnergy * costPerKWh;
          const monthlyCost = dailyCost * 30;
          const installationCost = numPanels * installationCostPerPanel;
          const paybackPeriod = installationCost / monthlyCost;

          return (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <img src={panel.image} alt={panel.model} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{panel.model}</h3>
              <p className="text-gray-700">Type: {panel.type}</p>
              <p>Panels Fit: {numPanels}</p>
              <p>Daily Energy: {dailyEnergy.toFixed(2)} kWh</p>
              <p>Monthly Savings: ₹{monthlyCost.toFixed(2)}</p>
              <p>Installation Cost: ₹{installationCost.toFixed(2)}</p>
              <p>Payback Period: {paybackPeriod.toFixed(1)} months</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
