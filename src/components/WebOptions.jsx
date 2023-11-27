import { useCheckbox } from "../CheckboxContext";

function WebOptions() {
  const { webOptions, onPagesChange, onLanguagesChange } = useCheckbox();
  return (
    <div className="flex flex-col mt-8 border-2 rounded-lg border-cyan-600 p-2 self-end w-96 gap-4 ">
      <div className="flex">
        <div>
          <button
            className="btn btn-sm btn-ghost p-0 mr-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Número de pàgines</h3>
              <p className="py-4">
                Afegeix les pàgines que tindrà el teu projecte. El cost de cada
                pàgina es de 30&euro;
              </p>
            </div>
          </dialog>
        </div>
        <span className="self-center mr-auto">Número de pàgines:</span>
        <div>
          <button
            className="btn btn-circle btn-xs border-cyan-700"
            onClick={() =>
              webOptions.pages > 1 ? onPagesChange(webOptions.pages - 1) : null
            }
          >
            -
          </button>
          <input
            className="input input-bordered input-sm input-info w-14 mx-2 text-center"
            type="text"
            value={webOptions.pages}
            onChange={(e) => onPagesChange(parseInt(e.target.value, 10))}
            min="1"
          />
          <button
            className="btn btn-circle btn-xs border-cyan-700"
            onClick={() => onPagesChange(webOptions.pages + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex">
        <div>
          <button
            className="btn btn-sm btn-ghost p-0 mr-2"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Número de llenguatges</h3>
              <p className="py-4">
                Afegeix els llenguatges que tindrà el teu projecte. El cost de
                cada llenguatge es de 30&euro;
              </p>
            </div>
          </dialog>
        </div>
        <span className="self-center mr-auto">Número de llenguatges:</span>
        <div>
          <button
            className="btn btn-circle btn-xs border-cyan-700"
            onClick={() =>
              webOptions.languages > 1
                ? onLanguagesChange(webOptions.languages - 1)
                : null
            }
          >
            -
          </button>
          <input
            className="input input-bordered input-sm input-info w-14 mx-2 text-center"
            type="text"
            value={webOptions.languages}
            onChange={(e) => onLanguagesChange(parseInt(e.target.value, 10))}
            min="1"
          />
          <button
            className="btn btn-circle btn-xs border-cyan-700"
            onClick={() => onLanguagesChange(webOptions.languages + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebOptions;
