import Button from "./Components/Button";
import Card from "./Components/Card";
import Checkbox from "./Components/Checkbox";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import "./assets/css/components/app.css";

function App() {
  return (
    <>
      <main className="project-wrapper">
        <section className="heading-wrapper">
          <Heading heading="Todo App" />
          <div className="input-section">
            <Input placeholder="K K kam garna parne ho lekha..." />
            <Button name="Add" type="submit" className="btn btn-add" />
          </div>
        </section>
        <section className="display-wrapper">
          <h1>#### Tasks ####</h1>
          <div className="display-section">
            <Checkbox />
            <Card />
          </div>
          <div className="display-section">
            <Checkbox />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
