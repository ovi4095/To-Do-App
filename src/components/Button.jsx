const Button = ({ label, type, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
