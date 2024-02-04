import React from "react";
import AddTodo from "./component/AddTodo";
import TodoLIst from "./component/TodoLIst";

function App() {

  return (
    <div className="App">
      <header>
        <h1>To Do List 📓</h1>
        <h2>test!</h2>
        <h2>test2</h2>

        
      </header>
      <AddTodo />
      <TodoLIst />
    </div>
  );
}

export default App;
