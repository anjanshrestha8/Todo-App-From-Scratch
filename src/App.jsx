import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Checkbox from "./Components/Checkbox";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import "./assets/css/components/app.css";

function App() {
  const [task, setTask] = useState([
    {
      title: "",
      isComplete: false,
    },
  ]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editingIndex, setEditingIndex] = useState(0);
  const [newTask, setNewTask] = useState("");

  // Functions

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, []);

  const handleClick = () => {
    if (newTask === "") {
      return;
    } else if (!toggleSubmit) {
      let firstArr = task.slice(0, editingIndex);
      let lastArr = task.slice(editingIndex + 1);
      let modifiedArray = [
        ...firstArr,
        { work: newTask, isComplete: false },
        ...lastArr,
      ];
      setTask(modifiedArray);
      setNewTask("");
      setToggleSubmit(!toggleSubmit);
    } else {
      let modifiedArray = [...task, { title: newTask, isComplete: false }];
      setTask(modifiedArray);
      setNewTask("");

      fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedArray),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };

  const handleDelete = (index) => {
    let remainingArray = task.filter((f_item, f_index) => {
      return f_index != index;
    });
    setTask(remainingArray);
  };

  const handleEdit = (index) => {
    const editArray = task.find((item, idx) => {
      return idx === index;
    });
    setToggleSubmit(!toggleSubmit);
    console.log(editArray.work);
    setNewTask(editArray.work);
    setEditingIndex(index);
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
                setNewTask(event.target.value);
              }}
              value={newTask}
            />
            {toggleSubmit ? (
              <Button
                name="Add"
                type="submit"
                className="btn btn-add"
                onClick={handleClick}
              />
            ) : (
              <Button
                name="Edit"
                type="submit"
                className="btn btn-add"
                onClick={handleClick}
              />
            )}
          </div>
        </section>
        <section className="display-wrapper">
          <h1>#### Tasks ####</h1>
          {task?.map((item, index) => {
            return (
              <div className="display-section" key={index}>
                <Checkbox />
                {/* <Checkbox isComplete={item.isComplete} /> */}
                <Card task={item.title} />

                <Button
                  className="btn btn-edit"
                  name="Edit"
                  onClick={() => {
                    handleEdit(index);
                  }}
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
