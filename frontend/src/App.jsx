import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  const getjokeData = async () => {
    try {
      const { data } = await axios.get("/api/jokes");
      setjokes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getjokeData();
  }, []);

  return (
    <>
      <h1> front and backed connect together </h1>
      <p>Jokes :{jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
