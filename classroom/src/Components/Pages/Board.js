import React, { useState } from "react";
import "../../CSS/index.css";
import Sidebar from "./Sidebar";
import CanvasDraw from "react-canvas-draw";
import { useNavigate } from 'react-router';

function Board() {
    console.log("Prop");
    const [canvas, setBrush] = useState("#0000ff");
    const [brush, setThick] = useState(2);
    const Navigate = useNavigate();
    return (
        <>
            <Sidebar />

            <div style={{ float: 'right', marginRight: '4rem' }}>
                {/* <button type="button" class="btn btn-outline-light" style={{ marginTop: '10rem' }} onClick={() => {
                    document.getElementById('canvas').undo();
                    
                }}>Undo</button> */}
                <br></br><br></br>
                <button type="button" class="btn btn-outline-light" style={{ marginTop: '9rem' }} onClick={() => {
                    window.location.reload();
                }}>Clear Board</button>
                <br></br><br></br>
                <button type="button" class="btn btn-outline-light"
                    onClick={() => {
                        Navigate(-1);
                    }
                    }> Go Back</button>
                <br></br>
                <br></br>
                <label style={{ color: 'white' }}>Colour picker</label>
                <br></br>
                
                <input
                    style={{ background: { canvas }}}
                    type="color"
                    value={canvas}
                    onChange={(event) => {
                        console.log(event.target.value);
                        setBrush(event.target.value);
                    }} />
                <br></br><br></br>
                <label style={{ color: 'white' }}>Brush Thickness</label>
                <div className="thickness"></div>
                <input
                    min="2"
                    max="50"
                    type="range"
                    onChange={(event) => {
                        console.log(event.target.value);
                        setThick(event.target.value);
                    }}
                />
            </div>
            <div className='board' id="board">
                <CanvasDraw
                    // ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasWidth={1000}
                    canvasHeight={1000}
                    id='canvas' />
            </div>
        </>
    )
}
export default Board;

