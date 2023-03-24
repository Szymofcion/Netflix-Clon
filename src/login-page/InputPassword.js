import "./InputPassword.scss";

const InputPassword = ({ value, onChange }) => {
  return (
    <div>
      <input
        className="login__container-input--style input--color"
        placeholder="Hasło"
        type="password"
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default InputPassword;
