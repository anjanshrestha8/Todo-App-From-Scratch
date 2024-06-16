/* eslint-disable react/prop-types */
import "../assets/css/components/checkbox.css";
function Checkbox(props) {
  return (
    <>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name=""
          id=""
          checked={props.isComplete}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}

export default Checkbox;
