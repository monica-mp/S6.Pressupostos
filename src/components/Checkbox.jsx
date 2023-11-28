import WebOptions from "./WebOptions";
import { Link } from "react-router-dom";
import { useCheckbox } from "../CheckboxContext";

function Checkbox() {
  const { services, arrayServices, handleCheckboxChange, calculateTotal, applyDiscount, handleDiscountChange } =
    useCheckbox();

  return (
    <div>
      <Link to="/">
        <button className="btn btn-outline btn-info btn-sm m-2">
          Ves a Home
        </button>
      </Link>
      <label className="flex cursor-pointer gap-2 justify-center my-14">
        <span className="label-text">Pagament mensual</span>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle toggle-info"
          onChange={handleDiscountChange}
        />
        <span className="label-text">Pagament anual</span>
      </label>
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

              <div className="form-control w-96 self-center">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    {applyDiscount && (
                      <p className="label text-sm text-orange-400">
                        Estalvia un 20%
                      </p>
                    )}
                    <div className="flex justify-start">
                      <div>
                        <p className="label text-xl font-semibold">
                          {applyDiscount
                            ? `${(service.price * 0.8)}€`
                            : `${service.price}€`}
                        </p>
                      </div>
                    </div>
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
                  {services.web && service.name === "Web" && <WebOptions />}
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="text-end">Preu pressuposat: {applyDiscount ? (calculateTotal() * 0.8) : calculateTotal()}&euro;</p>
      </div>
    </div>
  );
}

export default Checkbox;
