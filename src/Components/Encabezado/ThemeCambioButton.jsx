import { useContext } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ContextGlobal } from "../utils/global.context";

// Lista de temas disponibles
const themes = ["light", "dark"];

// Componente del botón de cambio de tema
export default function ThemeCambioButton() {
  // Obtener el estado del tema y la función de despacho del contexto global
  const { themeState, themeDispatch } = useContext(ContextGlobal);

  // Función para alternar el tema
  const cambioTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className="switch-theme">
      {/* Mapear los temas y renderizar botones para cada uno */}
      {themes.map((t) => {
        // Determinar si el tema actual está seleccionado
        const checked = t === themeState.theme;
        return (
          <button
            key={t}
            className={`${checked ? "bg-white" : ""}`}
            onClick={cambioTheme}
            aria-label="Cambio theme"
          >
            {/* Mostrar icono de estrella o estrella según el tema*/}
            {t === "light" ? <BsStar /> : <BsStarFill />}
          </button>
        );
      })}
    </div>
  );
}
