
function Button({ handleClick, btnColor, children }) {
  return (
    <button onClick={handleClick} className={`btn btn-${btnColor} m-2`}>
      {children}
    </button>
  );
}
export default Button;
