import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./Components/Event";
import Lists from "./Components/Lists";
import { Link } from 'react-router-dom';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      console.log("Hello, World!"); 
    }, 3000);
  }, [isLoading]);


  return (
    <div className="App">
      <h1>Assignment</h1>
      {isLoading && <h4>Loading...</h4>}
      <Link to='/event'>Events</Link> 
       <Routes>
       {!isLoading && <Route path="/event" element={<Event />}/>}
       {!isLoading && <Route path="/" element={<Lists />} />}
      </Routes>
    </div>
  );
}

export default App;
