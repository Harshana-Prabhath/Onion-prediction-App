import React from "react"
import { useNavigate } from "react-router";

const PredictionGraph:React.FC =()=> {
    let navigate = useNavigate();
    const handleClick = ()=> {
        navigate("/")
    }
    return(
        <div>
        <h1>Prediction graph goes here</h1>
        <button onClick={handleClick}>Go to Home page</button>
        </div>
    )

}

export default PredictionGraph;