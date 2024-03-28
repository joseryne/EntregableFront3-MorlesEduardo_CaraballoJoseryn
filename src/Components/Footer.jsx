const Footer = () => {
const facebookUrl = 'https://www.facebook.com/tupagina/';
const instagramUrl = 'https://www.instagram.com/tucuenta/';
const whatsappUrl = 'https://api.whatsapp.com/send?phone=tutelefono&text=Hola%2C%20te%20env%C3%ADo%20este%20enlace%20desde%20mi%20sitio%20web';
const tiktokUrl = 'https://www.tiktok.com/@tucuenta';
  return (
    <footer className="footer">
      <img src="./images/DH.png" alt="DH-logo" />
      <a href={facebookUrl} target="_blank" rel="noreferrer"><img 
        className="img-1"
        src="./images/ico-facebook.png"
      /></a>
      <a href={instagramUrl} target="_blank" rel="noreferrer"><img
        className="img-1"
        src="./images/ico-instagram.png"
        alt="logo-instagram"
      /></a>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
      <img
        className="img-1"
        src="./images/ico-whatsapp.png"
        alt="logo-whatsapp"
      /></a>
      <a href={tiktokUrl} target="_blank" rel="noreferrer">
      <img className="img-1" src="./images/ico-tiktok.png" alt="logo-tiktok" /></a>
    </footer>
  );
};

export default Footer;
