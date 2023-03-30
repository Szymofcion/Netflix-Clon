import "./ButtonLogin.scss";
const ButtonLogin = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="login__container-button--style">
        Zaloguj się
      </button>
    </div>
  );
};

export default ButtonLogin;
