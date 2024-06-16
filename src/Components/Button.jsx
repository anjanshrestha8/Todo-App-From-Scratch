/* eslint-disable react/prop-types */
import "../assets/css/components/button.css";
function Button(props) {
  return (
    <>
      <div className="button-wrapper">
        <button
          type={props.type || "button"}
          onClick={props.onClick}
          className={props.className || "btn"}
        >
          {props.name || "Button"}
        </button>
      </div>
    </>
  );
}

export default Button;
