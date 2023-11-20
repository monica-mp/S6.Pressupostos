import WebOptions from "./WebOptions";
import { useState } from "react";

function Checkbox({ services, onCheckboxChange }) {
  const prices = {
    seo: 300,
    ads: 400,
    web: 500,
  };

  const [webOptions, setWebOptions] = useState({
    pages: 1,
    languages: 1,
  });

  const onPagesChange = (pages) => {
    setWebOptions({ ...webOptions, pages });
  };

  const onLanguagesChange = (languages) => {
    setWebOptions({ ...webOptions, languages });
  };

  const calculateTotal = () => {
    if (services.web) {
      const webCost = (webOptions.pages + webOptions.languages) * 30;
      return Object.keys(services).reduce(
        (total, service) =>
          services[service] ? total + prices[service] : total,
        webCost
      );
    }

    return Object.keys(services).reduce(
      (total, service) => (services[service] ? total + prices[service] : total),
      0
    );
  };

  return (
    <div className="container w-2/5 mx-auto">     
      <div className="flex my-4 border-2 rounded-lg border-gray-700 p-4">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-bold">Seo</h2>
          <p>Programació d'una web responsive completa</p>
        </div>
        <div className="flex-grow text-center self-center">
          <p className="text-xl font-semibold">{prices.seo}&euro;</p>
        </div>
        <div className="form-control self-center">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              checked={services.seo}
              onChange={() => onCheckboxChange("seo")}
            />
            <span className="label-text pl-2">Add</span>
          </label>
        </div>
      </div>
      <div className="flex my-4 border-2 rounded-lg border-gray-700 p-4">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-bold">Ads</h2>
          <p>Programació d'una web responsive completa</p>
        </div>
        <div className="flex-grow text-center self-center">
          <p className="text-xl font-semibold">{prices.ads}&euro;</p>
        </div>
        <div className="form-control self-center">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              checked={services.ads}
              onChange={() => onCheckboxChange("ads")}
            />
            <span className="label-text pl-2">Add</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col my-4 border-2 rounded-lg border-gray-700 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <h2 className="text-lg font-bold">Web</h2>
            <p>Programació d'una web responsive completa</p>
          </div>
          <div className="flex-grow text-center self-center">
            <p className="text-xl font-semibold">{prices.web}&euro;</p>
          </div>
          <div className="form-control flex-col self-center">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                checked={services.web}
                onChange={() => onCheckboxChange("web")}
              />
              <span className="label-text pl-2">Add</span>
            </label>
          </div>
        </div>
        {services.web && (
          <WebOptions
            pages={webOptions.pages}
            languages={webOptions.languages}
            onPagesChange={onPagesChange}
            onLanguagesChange={onLanguagesChange}
          />
        )}
      </div>
      <p className="text-end">Preu pressuposat: {calculateTotal()}&euro;</p>
    </div>
  );
}

export default Checkbox;
