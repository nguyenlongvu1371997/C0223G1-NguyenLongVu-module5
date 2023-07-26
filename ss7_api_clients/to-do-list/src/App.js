import logo from './logo.svg';
import './App.css';
import { getToDoList, createToDo } from './service/ListService';
import { useEffect, useState } from 'react';



function App() {
  const [toDoList, setToDoList] = useState([]);

  const getToDoList = async () => {
    const data = await getListToDo();
    setToDoList(data);
  };

  useEffect(() => {
    getToDoList();
  },[newToDo])

  const handleAddTodo = () => {
    const toDo = document.getElementById('toDo').value;
    createToDo(toDo);
    document.getElementById('toDo').value = "";
  }


  return (
    <div className="App">
      <h1>To do list</h1>
      <input type='text' id='toDo' />
      <button onClick={() => handleAddTodo()}>submit</button>
      {toDoList.map((item) =>
        <p key={item.id}>{item.name}</p>
      )}

    </div>
  );
}

export default App;
