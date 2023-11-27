import WebOptions from "./WebOptions";
import { Link } from "react-router-dom";
import { useCheckbox } from "../CheckboxContext";

function Checkbox() {
  const {
    services,
    arrayServices,
    handleCheckboxChange,
    webOptions,
    onPagesChange,
    onLanguagesChange,
    calculateTotal,
  } = useCheckbox();

  return (
    <div>
      <Link to="/">
        <button className="btn btn-outline btn-info btn-sm m-2">
          Ves a Home
        </button>
      </Link>
      <div className="container w-3/6 mx-auto ">
        {arrayServices.map((service, index) => (
          <div
            key={index}
            className="flex my-4 border-2 rounded-lg border-gray-700 p-4 shadow-md shadow-cyan-950"
          >
            <div className="container flex justify-between ">
              <div>
                <h2 className="text-lg font-bold">{service.name}</h2>
                <p>{service.description}</p>
              </div>

              <div className="form-control w-96">
                <div className="flex justify-between">
                  <div>
                    <p className="label text-xl font-semibold">
                      {service.price}&euro;
                    </p>
                  </div>
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info "
                      checked={service.checked}
                      onChange={() => handleCheckboxChange(service.name)}
                    />
                    <span className="pl-2">Afegir</span>
                  </label>
                </div>

                <div className="self-end">
                  {services.web && service.name === "Web" && (
                    <WebOptions />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="text-end">Preu pressuposat: {calculateTotal()}&euro;</p>
      </div>
    </div>
  );
}

export default Checkbox;
