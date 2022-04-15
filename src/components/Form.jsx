import { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
    // console.log(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(input);
    setInput("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={input}
          placeholder="Ex: Buy a coffee"
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default Form;
