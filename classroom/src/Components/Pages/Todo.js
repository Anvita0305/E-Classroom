import { React, useState } from 'react';
import Sidebar from './Sidebar';
import '../../CSS/index.css';
import AddIcon from '@mui/icons-material/Add';
import TodoItems from './TodoItems';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //storing in db
  const [itemName, setItemName] = useState("");

  const itemEvent = (event) => {
    setInput(event.target.value);
    setItemName(event.target.value);
  }

  const makeList = () => {
    if (input !== "" && todos.includes(input) === false) {
      setTodos([...todos, input]);
    }
    if (input === "") {
      alert("Please enter a task");
    }
    if (todos.includes(input) === true) {
      alert("Task already exists");
    }
    setInput("");
  }

  // check all the indices if matched don't return otherwise return the index
  const deleteItem = (id) => {
    setTodos(todos.filter((currElem, indNo) => {
      return indNo !== id;
    }));
  }

  async function addTodo(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // parse the string to store it in required format
      body: JSON.stringify({
        itemName,
      }),
    })
    const data = await response.json()
    console.log(data);
  }

  return (
    <>
      <Sidebar></Sidebar>

      <div className='todoB'>
        <div className=''>
          <br></br>
          <h1 style={{ textAlign: 'center' }}>Add Your Todos Here...</h1>
          <br /><br />
          <div style={{ textAlign: 'center' }}>
            <form onSubmit={addTodo}>
            <PersonIcon style={{fontSize:'2rem'}}/>
            <input type="text" placeholder="Enter Your UserName" />
            <br></br>
            <br></br>
            <ListIcon style={{fontSize:'3rem'}}/>
              <input type='text' value={input} placeholder='Add Todo' style={{ width: '50%', height: '3rem' }} onChange={(e) => {
                setItemName(e.target.value);
                setInput(e.target.value);
              }} />
              <br /><br></br>
              <button type='submit' value="todo" style={{ width: '10%', height: '3rem', borderTop: 'none', borderLeft: 'none', borderRadius: '1rem' }} onClick={makeList}><AddIcon /></button>
              <br></br>
            </form>
            <ol>
              {/* <li>{input}</li> */}
              {todos.map((val, index) => {
                return <TodoItems value={itemName} key={index} id={index} text={val} onSelect={deleteItem} />;
              })}
            </ol>
          </div>
        </div>
      </div>


    </>

  );
};

export default Todos;