/* eslint-disable react/prop-types */
import "../assets/css/components/input.css";
function Input(props) {
  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder={props.placeholder || "  Enter something.........."}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </>
  );
}

export default Input;
