import { useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Checkbox from "./Components/Checkbox";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import "./assets/css/components/app.css";

function App() {
  const [task, setTask] = useState([
    {
      work: "Goto gym",
      isComplete: true,
    },
    {
      work: "Goto home",
      isComplete: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // Functions

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleClick = () => {
    let modifiedArray = [...task, { work: newTask }];
    setTask(modifiedArray);
  };

  const handleDelete = (index) => {
    let remainingArray = task.filter((f_item, f_index) => {
      return f_index != index;
    });
    setTask(remainingArray);
  };

  return (
    <>
      <main className="project-wrapper">
        <section className="heading-wrapper">
          <Heading heading="Todo App" />
          <div className="input-section">
            <Input
              placeholder="K K kam garna parne ho lekha..."
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Button
              name="Add"
              type="submit"
              className="btn btn-add"
              onClick={handleClick}
            />
          </div>
        </section>
        <section className="display-wrapper">
          <h1>#### Tasks ####</h1>
          {task?.map((item, index) => {
            return (
              <div className="display-section" key={index}>
                <Checkbox />
                {/* <Checkbox isComplete={item.isComplete} /> */}
                <Card task={item.work} />

                <Button
                  className="btn btn-edit"
                  name="Edit"
                  // onClick={handleEdit}
                />
                <Button
                  className="btn btn-delete"
                  name="Delete"
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
