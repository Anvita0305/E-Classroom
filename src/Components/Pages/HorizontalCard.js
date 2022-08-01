import React from "react";

const HorizontalCard = (props) => {
    return (
        <>
            <div className="card mb-3" style={{maxWidth: "540px;",marginLeft:"10%",marginRight:"10%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imgsrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.about}</p>
                            {/* <h6>{props.desc}</h6> */}
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    )
}
export default HorizontalCard;