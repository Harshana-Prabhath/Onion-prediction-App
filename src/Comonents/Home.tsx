import React from "react";
import { useNavigate } from "react-router";

const Home: React.FC = ()=> {
    let navigate = useNavigate();

    const handleClick =()=> {
        navigate("/prediction-graph")
    }

    return(
        <div>
            <h1>This is the homepage</h1>
            <button onClick={handleClick}>Go to prediction page</button>
        </div>

    )

}

export default Home;