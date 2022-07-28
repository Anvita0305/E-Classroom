import {React,useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItems = (props) => {
  const [deletetodo, setdeletetodo] = useState("");
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

    return (
        <>
            <div style={{textAlign:'center'}}>
                <div style={{display:'flex',flexDirection:'row',textAlign:'center'}}>
                    <h5><li style={{textAlign:'center'}}>{props.text}</li></h5>
                    <form onSubmit={deleteTD}>
                       <button type="button" value="deletetodo" onClick={()=>{setdeletetodo(props.text);props.onSelect(props.id);}} >Delete</button>
                    </form>
                </div>
            </div>

        </>);
}

export default TodoItems;