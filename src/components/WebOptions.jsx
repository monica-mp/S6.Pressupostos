import { useCheckbox } from "../CheckboxContext";

function WebOptions() {
  const { webOptions, onPagesChange, onLanguagesChange } = useCheckbox();
  return (
    <div className="flex flex-col mt-8 border-2 rounded-lg border-cyan-600 p-2 self-end w-80 gap-4 ">
      <div className="flex justify-between">
        <span>Número de pàgines:</span>
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
      <div className="flex justify-between">
        <span>Número de llenguatges:</span>
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
