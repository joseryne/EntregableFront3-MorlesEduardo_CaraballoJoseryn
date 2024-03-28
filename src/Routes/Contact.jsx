import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Form from "../Components/Form";

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`contactBox ${theme}`}>
      <h1>¿Quiere saber más?</h1>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
