import axios from "axios";

export async function getToDoList(){
  const res = await axios.get('http://localhost:8080/toDoList');
  return res.data;
}

export async function createToDo(toDo){
  await axios.post('http://localhost:8080/toDoList',{name: toDo});
}