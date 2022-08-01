import react from "react";
import Button from '@mui/material/Button';
import "../../CSS/index.css"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DrawerAppBar from "./DrawerAppBar";
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Intro = () => {
    return (
        <>
            <DrawerAppBar />
            <div className="intro-mainpage">
                <h1 className="intro-heading" style={{ color: 'white', textAlign: 'center' }}>Welcome!</h1>
                <h3 className="intro-quote">Your Classroom is only a click away...</h3>
                <br></br><br></br>
                <Button variant="contained" className="intro-btn" style={{ marginLeft: '46%' }} href="/Register">Get Started <DoubleArrowIcon /></Button>
                <h1 className="intro-bottom"></h1>
                <Fab variant="extended" size="small" color="primary" aria-label="add" style={{ marginLeft: '46%' }} onClick={()=>{ window.scrollBy(0,750);}}>
                    <ArrowDownwardIcon sx={{ mr: 1 }} />
                    Scroll Down
                </Fab>
                <br></br><br></br>
                <br></br><br></br>
            </div>
        </>
    )
}

export default Intro;