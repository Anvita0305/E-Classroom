import React from "react";
import HorizontalCard from "./HorizontalCard";
import FeaturesData from "./FeaturesData";
import ScrollAnimation from 'react-animate-on-scroll';

const FeaturesCards = (val) => {
    return (
        <>
            <HorizontalCard
                imgsrc={val.imgsrc}
                title={val.title}
                about={val.about}
                link={val.gitLink}
            />
        </>
    )
}

const Features = () => {
    return (
        <>
            <div>
                <br></br>
                <h3 style={{textAlign:'center'}}>Following are some salient features of our E-Classroom:</h3>
                <hr></hr>
                <ScrollAnimation animateIn="fadeIn">
                    <div>{FeaturesData.map(FeaturesCards)}</div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default Features;