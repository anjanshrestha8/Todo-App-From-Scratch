/* eslint-disable react/prop-types */
import "../assets/css/components/card.css";
function Card(props) {
  return (
    <>
      <div className="card-wrapper">
        <h1>{props.task || "task"}</h1>
      </div>
    </>
  );
}

export default Card;
