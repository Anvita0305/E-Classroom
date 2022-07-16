import {React,useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItems = (props) => {
  const [deletetodo, setdeletetodo] = useState("");
    async function deleteTD(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:8000/api/deletetodo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // parse the string to store it in required format
          body: JSON.stringify({
            deletetodo,
          }),
        })
        const data = await response.json()
        console.log(data);
      }

    return (
        <>
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <li>{props.text}</li>
                    <form onSubmit={deleteTD}>
                    <button type="button" value="deletetodo" onClick={()=>{setdeletetodo(props.text);props.onSelect(props.id)}}><DeleteIcon/></button>
                    </form>
                </div>
            </div>

        </>);
}

export default TodoItems;