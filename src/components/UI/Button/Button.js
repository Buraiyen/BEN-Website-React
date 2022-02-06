import './Buttons.css';
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className} `}
      disabled={props.disabled === 0 && true}
    >
      {props.children}
    </button>
  );
};

export default Button;
