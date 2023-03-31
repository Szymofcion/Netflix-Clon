

import "./InputLogin.scss";

const InputLogin = ({ value, onChange }) => {
  return (
    <div className="input__containter">
      <input
        className="login__container-input--style input--color"
        placeholder="Login"
        type="login"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputLogin;
