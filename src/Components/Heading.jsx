/* eslint-disable react/prop-types */
import "../assets/css/components/heading.css";

function Heading(props) {
  return (
    <>
      <div className="heading-wrapper">
        <h1>{props.heading}</h1>
      </div>
    </>
  );
}

export default Heading;
