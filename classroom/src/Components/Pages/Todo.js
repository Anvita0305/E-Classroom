import { React, useState } from 'react';
import Sidebar from './Sidebar';
import '../../CSS/index.css';
import AddIcon from '@mui/icons-material/Add';
import TodoItems from './TodoItems';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import "../../CSS/index.css"

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [username, setusername] = useState("");
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
    alert("Task added Successfully!");
    setInput("");
  }

  // check all the indices if matched don't return otherwise return the index
  const deleteItem = (id) => {
    setTodos(todos.filter((currElem, indNo) => {
      return indNo !== id;
    }));
  }

  const TodoItems = (props) => {
      async function deleteTD(event,username) {
          event.preventDefault();
          const response = await fetch("http://localhost:8000/api/deletetodo"+username, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.json()
          console.log(data);
        }
  }
  
  async function getData(event) {
    let databack = document.getElementById("todofromback");
    let username = document.getElementById("username").value;
    let flag = 0;
    event.preventDefault();
    axios.get("http://localhost:8000/api/todo")
      .then(
        (response) => {
          const data = response.data;
          // this.setState({ posts: data });
          // console.log(data[0].itemName);
          for (let i = 0; i < data.length; i++) {
            if (data[i].username === username) {
              if ((data[i].itemName).length === 0) {
                alert("No Tasks Added!");
              }
              for (let j = 0; j < (data[i].itemName).length; j++) {
                databack.innerHTML += "<li>" + data[i].itemName[j] + `<button  onclick='deletefromdb(this)'>Delete</button>` + "</li>";
                flag = 1;
              }
              break;
            }
          }
          if (flag === 0) {
            alert("Invalid Username");
          }
        }
      );

  }

  window.deletefromdb = function (id) {
    // console.log(itemName[0]);
    console.log(id.parentNode.innerHTML.split("<")[0]);
    // console.log(id);
    let i = 0;
    axios.get("http://localhost:8000/api/todo")
      .then(
        (response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < (data[i].itemName).length; j++) {
              if (data[i].itemName[j] === id.parentNode.innerHTML.split("<")[0]) {
                axios.delete("http://localhost:8000/api/todo/"+data[i]._id+"/"+data[i].username+"/"+data[i].itemName[j])
                  .then(
                    (response) => {
                      console.log(response);
                      console.log(response.data);
                      alert("Item deleted Successfully! Please Refresh the Page to check updated List");
                    }
                  )
                break;
              }
            }
          }
        }
      )
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
        username,
        itemName,
      }),
    })
    const data = await response.json()
    console.log(data);
  }

  return (
    <>
      <div style={{ margin: 'auto', overflow: 'visible' }}>
        <Sidebar></Sidebar>

        <div>
          <div style={{ backgroundColor: 'rgb(144, 118, 297)' }}>
            <br></br>
            <h1 style={{ textAlign: 'center' }}>Add Your Todos Here...</h1>
            <br /><br />
            <div style={{ textAlign: 'center', }}>
              <form onSubmit={addTodo}>
                <label>Enter your Username here</label>
                <br></br>
                <PersonIcon style={{ fontSize: '2rem' }} />
                <input type="text" placeholder="Enter Your First Name" id="username" value={username} onChange={(e) => {
                  setusername(e.target.value);
                }} />
                <br></br>
                <br></br>
                <button type="submit" onClick={getData}>To Check your Todos Click Here</button>
                <br></br>
                <br></br>
                <ListIcon style={{ fontSize: '3rem' }} />
                <input type='text' value={input} placeholder='Add Todo' style={{ width: '50%', height: '3rem' }} onChange={(e) => {
                  setItemName(e.target.value);
                  setInput(e.target.value);
                }} />
                <br /><br></br>
                <button type='submit' value="todo" style={{ width: '10%', height: '3rem', borderTop: 'none', borderLeft: 'none', borderRadius: '1rem' }} onClick={makeList}><AddIcon /></button>
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
          <br></br>
          <div style={{ textAlign: 'center' }}>
            <div>
              <div>
                <hr></hr>
                <ul style={{ textAlign: 'center' }}>
                  {todos.map((val, index) => {
                    return <TodoItems value={itemName} key={index} id={index} text={val} onSelect={deleteItem} style={{ textAlign: 'center' }} />;
                  })}
                </ul>
              </div>
              <hr></hr>
              <h3 style={{ textAlign: 'center' }}>My Todos</h3>
              <hr></hr>
              <ul style={{ textAlign: 'center' }}>
                <h5 id="todofromback"></h5>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Todos;