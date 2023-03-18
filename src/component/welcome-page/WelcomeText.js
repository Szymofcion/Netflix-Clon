import "./WelcomeText.scss";

const WelcomeText = () => {
  return (
    <section className="container__main">
      <h4 className="container__main-title">
        Nieograniczona oferta filmów, seriali i programów.
      </h4>
      <p className="container__main-text">
        Oglądaj wszędzie. Możesz anulować w każdej chwili
      </p>
      <button className="container__main-button">Zacznij</button>
    </section>
  );
};

export default WelcomeText;
