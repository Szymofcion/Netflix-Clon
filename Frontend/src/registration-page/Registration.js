import "./Registration.scss";

const Registration = () => {
  return (
    <section className="registration__container">
      <form className="registration__container-form">
        <input
          className="registration__container-input--style input--color"
          placeholder="Login"
          type="text"
        />
        <input
          className="registration__container-input--style input--color"
          placeholder="Hasło"
          type="text"
        />
        <button className="registration__container-button--style">
          Zarejestruj się
        </button>
      </form>
    </section>
  );
};

export default Registration;
