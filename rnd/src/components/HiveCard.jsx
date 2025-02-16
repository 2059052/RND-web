import { Thermometer, Droplets, BatteryFull, Sun, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HiveCard = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hives/BH001`); // Navigate to the details page
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 w-72 border border-gray-200 cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <div className="flex justify-between text-gray-600 text-sm font-semibold">
        <span>Near house</span>
        <span className="text-gray-400">BH001</span>
      </div>
      <div className="mt-2 space-y-2 text-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-red-500">
            <Thermometer size={18} className="mr-2" />
            <span>Temperature</span>
          </div>
          <span>30°C</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-blue-500">
            <Droplets size={18} className="mr-2" />
            <span>Humidity</span>
          </div>
          <span>35%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Package size={18} className="mr-2" />
            <span>Weight</span>
          </div>
          <span>60 kg</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500">
            <Sun size={18} className="mr-2" />
            <span>UV Index</span>
          </div>
          <span>3/10</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-500">
            <BatteryFull size={18} className="mr-2" />
            <span>Battery</span>
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default HiveCard;
