import React, { Component } from "react";
import "../../CSS/index.css";
import Sidebar from "./Sidebar";
import CanvasDraw from "react-canvas-draw";
import {useNavigate} from 'react-router';

function Board() {
    console.log("Prop");
    const Navigate = useNavigate();
    return (
        <>
            <Sidebar />
            
            <div style={{ float: 'right', marginRight: '4rem' }}>
                {/* <button type="button" class="btn btn-outline-light" style={{ marginTop: '10rem' }} onClick={() => {
                    document.getElementById('canvas').undo();
                    
                }}>Undo</button> */}
                <br></br><br></br>
                <button type="button" class="btn btn-outline-light" style={{ marginTop: '12rem' }} onClick={() => {
                    window.location.reload();
                }}>Clear Board</button>
                <br></br><br></br>
                <button type="button" class="btn btn-outline-light"
                    onClick={() => {
                        Navigate(-1);
                    }
                    }> Go Back</button>
                <br></br><br></br>
            </div>
            <div className='board' id="board">
                <CanvasDraw
                    // ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
                    brushRadius={2}
                    brushColor="black"
                    canvasWidth={1000}
                    canvasHeight={1000}
                    id='canvas' />
            </div>
        </>
    )
}
export default Board;

