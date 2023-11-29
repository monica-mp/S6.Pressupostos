import { createContext, useContext, useState } from "react"; //Importar Context i useState

const ElementsContext = createContext();

export const useElements = () => {
  return useContext(ElementsContext);
};

export const ElementsProvider = ({ children }) => {
  //Estats dels serveis. Checked o !Checked
  const [services, setServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  //Array amb cada servei
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

  //
  const handleCheckboxChange = (service) => {
    setServices({
      ...services,
      [service.toLowerCase()]: !services[service.toLowerCase()],
    });
  };

  //Opcions de Checkbox "Web". 
  const [webOptions, setWebOptions] = useState({
    pages: 1,
    languages: 1,
  });

  //
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

  const [applyDiscount, setApplyDiscount] = useState(false);

  const handleDiscountChange = () => {
    setApplyDiscount(!applyDiscount);
  };

  const contextValue = {
    services,
    arrayServices,
    webOptions,
    handleCheckboxChange,
    onPagesChange,
    onLanguagesChange,
    calculateTotal,
    handleDiscountChange,
    applyDiscount
  };

  return (
    <ElementsContext.Provider value={contextValue}>
      {children}
    </ElementsContext.Provider>
  );
};

export default ElementsProvider;
