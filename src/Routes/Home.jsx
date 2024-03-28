import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import CardStructura from "../Components/CardStructura";

const Home = () => {
  const { dentistsState, theme } = useContext(ContextGlobal);

  const renderCards = () => {
    if (dentistsState.dentistsList.length === 0) {
      return [...Array(10)].map((_, index) => <CardStructura key={index} />);
    } else {
      return dentistsState.dentistsList.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ));
    }
  };

  return (
    <div className={`home-container ${theme}`}>
      <h2>Home</h2>
      <div className="card-grid">{renderCards()}</div>
    </div>
  );
};

export default Home;
