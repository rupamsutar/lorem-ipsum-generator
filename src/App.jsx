import { useState } from "react";
import data from "./data";


const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0,count));
    console.log(text);    
  }

  return (
    <section className="section-center">
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button className="btn" type='submit'>Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
};
export default App;
