import { createContext, useContext, useState } from "react";

const CheckboxContext = createContext();

export const useCheckbox = () => {
  return useContext(CheckboxContext);
};

export const CheckboxProvider = ({ children }) => {
  const [services, setServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  const [webOptions, setWebOptions] = useState({
    pages: 1,
    languages: 1,
  });

  const arrayServices = [
    {
      name: "Seo",
      description: "Programació d'una web responsive completa",
      price: 300,
    },
    {
      name: "Ads",
      description: "Programació d'una web responsive completa",
      price: 400,
    },
    {
      name: "Web",
      description: "Programació d'una web responsive completa",
      price: 500,
    },
  ];

  const handleCheckboxChange = (service) => {
    setServices({
      ...services,
      [service.toLowerCase()]: !services[service.toLowerCase()],
    });
  };

  const onPagesChange = (pages) => {
    setWebOptions({ ...webOptions, pages });
  };

  const onLanguagesChange = (languages) => {
    setWebOptions({ ...webOptions, languages });
  };

  const calculateTotal = () => {
    let total = 0;

    arrayServices.forEach((service) => {
      if (services[service.name.toLowerCase()]) {
        total += service.price;
      }
    });
    if (services.web) {
      total += (webOptions.pages + webOptions.languages) * 30;
    }

    return total;
  };

  const contextValue = {
    services,
    arrayServices,
    webOptions,
    handleCheckboxChange,
    onPagesChange,
    onLanguagesChange,
    calculateTotal,
  };

  return (
    <CheckboxContext.Provider value={contextValue}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxProvider;
