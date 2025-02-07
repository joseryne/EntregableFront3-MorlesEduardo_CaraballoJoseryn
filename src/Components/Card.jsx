import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { BsStar, BsStarFill } from "react-icons/bs";

const Card = ({ name, username, id }) => {
  // Contexto para gestionar favoritos
  const { favState, favDispatch } = useContext(ContextGlobal);

  // Comprobar si la tarjeta actual está en favoritos
  const isFav = favState.some((fav) => fav.id === id);

  // Estado para rastrear la carga de la imagen
  const [imageLoaded, setImageLoaded] = useState(false);

  // Manejar el clic del botón de favoritos
  const handleFavClick = (e) => {
    e.stopPropagation();
    if (isFav) {
      favDispatch({ type: "DELETE_FAV", payload: id });
    } else {
      favDispatch({ type: "ADD_FAV", payload: { name, username, id } });
    }
  };

  // Manejar el evento de carga de la imagen
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="card-wraper">
      {/* Enlace a la página de detalles */}
      <Link className="card" to={`/detail/${id}`}>
        {/* Imagen real */}
        <img
          src="./images/doctor.jpg"
          alt="doctor"
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
        {/* Mostrar nombre, nombre de usuario e id */}
        <p>{name}</p>
        <p>User: {username}</p>
        {/* Mostrar esqueleto hasta que se cargue la imagen */}
        {!imageLoaded && <div className="structura_img"></div>}
        <button
          onClick={handleFavClick}
          className={`favButton ${isFav ? "favorited" : ""}`}
        >
          {/* Mostrar Estrella relleno si está en favoritos, estrella*/}
          {isFav ? <BsStarFill /> : <BsStar />}
        </button>
      </Link>
      {/* Botón de favoritos */}
    </div>
  );
};

export default Card;
