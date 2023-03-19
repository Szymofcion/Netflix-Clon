import 

const InputLogin = () => {
  const [login, setLogin] = useState("");
  const onChange = (e) => {};
  return (
    <div>
      <input
        className="login__container-input--style"
        placeholder="Hasło"
        type="text"
        value={textValue}
      />
    </div>
  );
};
