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

  //Canviar estat del checkbox
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

  //Agafar un paràmetre "pages/languages". Actualitzar l'estat de webOptions amb setWebOptions. Spread per copiar les propietats existents i sobreescriure la propietat "pages/languages" amb el nou valor
  const onPagesChange = (pages) => {
    setWebOptions({ ...webOptions, pages });
  };

  const onLanguagesChange = (languages) => {
    setWebOptions({ ...webOptions, languages });
  };

  //Calcular el cost total. Verifica si el servei està checked i suma el seu cost al total
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

  //N2. Aplicar descompte anual. De checked a !checked
  const [applyDiscount, setApplyDiscount] = useState(false);

  const handleDiscountChange = () => {
    setApplyDiscount(!applyDiscount);
  };

  //Props context
  const contextValue = {
    services,
    arrayServices,
    webOptions,
    handleCheckboxChange,
    onPagesChange,
    onLanguagesChange,
    calculateTotal,
    handleDiscountChange,
    applyDiscount,
  };

  return (
    <ElementsContext.Provider value={contextValue}>
      {children}
    </ElementsContext.Provider>
  );
};

export default ElementsProvider;
