import React from "react";
import { useNavigate } from "react-router";

const Home: React.FC = ()=> {
    let navigate = useNavigate();

    const handleClick =()=> {
        navigate("/prediction-graph")
    }

    return(
       <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col">
        {/* Hero Section with Background Image */}
        <div 
          className="flex-grow flex flex-col items-center justify-center text-center text-white p-4"
          style={{
            backgroundImage: `url('/api/placeholder/1024/768')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          {/* Overlay to darken the background image slightly */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-4 tracking-wide">
              BIG ONION YIELD
            </h1>
            <h1 className="text-6xl font-bold mb-4 tracking-wide">
              PREDICTION MODEL
            </h1>
            <h2 className="text-3xl font-semibold mb-8">
              IN SRI LANKA
            </h2>
            <p className="text-xl mb-12">
              A machine learning model for predicting big onion<br />
              yield based on environmental factors.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-12 rounded-md transition duration-300">
              PREDICT
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>

    )

}

export default Home;
