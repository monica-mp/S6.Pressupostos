import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen place-content-center">
      <h1 className="text-3xl font-bold">Benvingut/da</h1>
      <p className="w-2/5 text-center">
        Aquesta aplicació et permetrà calcular el pressupost per als serveis que
        oferim. Pots seleccionar els serveis desitjats i personalitzar-ne un
        d'ells.
      </p>
      <div className="collapse bg-base-200 w-2/5">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-center">
          Com funciona?
        </div>
        <div className="collapse-content">
          <ul className="menu bg-base-200 rounded-box">
            <li className="border-b border-slate-700">
              <details open>
                <summary>
                  Comença seleccionant els serveis que necessites per al teu
                  projecte. Pots triar entre tres opcions:
                </summary>
                <ul>
                  <li>
                    <a>Fer una campanya SEO</a>
                  </li>
                  <li>
                    <a>Fer una campanya de publicitat</a>
                  </li>
                  <li>
                    <a>Fer una pàgina web</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="border-b border-slate-700">
              <a>
                Si decideixes fer una pàgina web, tindràs l'oportunitat de
                personalitzar encara més el teu pressupost. Podràs seleccionar
                el nombre de pàgines i d'idiomes per a la teva web.
              </a>
            </li>
            <li>
              <a>
                Per facilitar la introducció de dades, hem afegit botons als
                costats dels camps de pàgines i d'idiomes. Amb aquests botons,
                pots augmentar o disminuir la quantitat en una unitat per
                ajustar el teu pressupost segons les teves preferències.
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/app">
        <button className="btn btn-outline btn-info">Ves a l'App</button>
      </Link>
    </div>
  );
}
export default Welcome;
