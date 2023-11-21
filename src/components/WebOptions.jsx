function WebOptions({ pages, languages, onPagesChange, onLanguagesChange }) {
  return (
    <div className="flex flex-col mt-8 border-2 rounded-lg border-cyan-600 p-2 self-end w-96 gap-4">
      <div className="flex justify-between">
        <span>Número de pàgines:</span>
        <div >
          <button className="btn btn-circle btn-xs border-cyan-700" onClick={() => (pages > 1 ? onPagesChange(pages - 1) : null)}>
            -
          </button>
          <input
            className="input input-bordered input-sm input-info w-16 mx-2"
            type="number"
            value={pages}
            onChange={(e) => onPagesChange(parseInt(e.target.value, 10))}
            min="1"
          />
          <button className="btn btn-circle btn-xs border-cyan-700" onClick={() => onPagesChange(pages + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Número de llenguatges:</span>
        <div >
          <button className="btn btn-circle btn-xs border-cyan-700" onClick={() => (languages > 1 ? onLanguagesChange(languages - 1) : null)}>
            -
          </button>
          <input
            className="input input-bordered input-sm input-info w-16 mx-2"
            type="number"
            value={languages}
            onChange={(e) => onLanguagesChange(parseInt(e.target.value, 10))}
            min="1"
          />
          <button className="btn btn-circle btn-xs border-cyan-700" onClick={() => onLanguagesChange(languages + 1)}>
            +
          </button>
        </div>
      </div>      
    </div>
  );
}

export default WebOptions;
