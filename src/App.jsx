import "./App.css";
import Checkbox from "./components/Checkbox.jsx";
import { useState } from "react";

function App() {
  const [services, setServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  const handleCheckboxChange = (service) => {
    setServices({
      ...services,
      [service]: !services[service],
    });
  };

  return (
    <Checkbox services={services} onCheckboxChange={handleCheckboxChange} />
  );
}

export default App;
