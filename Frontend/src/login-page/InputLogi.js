import "./InputLogin.scss";

const InputLogin = () => {
  return (
    <div className="input__containter">
      <input
        className="login__container-input--style input--color"
        placeholder="Login"
        type="login"
        name="login"
      />
    </div>
  );
};

export default InputLogin;
