function WebOptions({ pages, languages, onPagesChange, onLanguagesChange }) {
  return (
    <div className="flex flex-col mt-8 border-2 rounded-lg border-fuchsia-500  p-2 self-end">
      <label className="label">
        Número de pàgines:{" "}
        <input className="input input-bordered input-primary w-20"
          type="number"
          value={pages}
          onChange={(e) => onPagesChange(parseInt(e.target.value, 10))}
          min="1"
        />
      </label>
      <label className="label">
        Número de llenguatges:{" "}
        <input className="input input-bordered input-primary w-20 ml-5"
          type="number"
          value={languages}
          onChange={(e) => onLanguagesChange(parseInt(e.target.value, 10))}
          min="1"
        />
      </label>
    </div>
  );
}

export default WebOptions;
