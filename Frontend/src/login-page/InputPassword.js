import "./InputPassword.scss";

const InputPassword = () => {
  return (
    <div>
      <input
        className="login__container-input--style input--color"
        placeholder="Hasło"
        type="password"
        name="password"
      ></input>
    </div>
  );
};

export default InputPassword;
