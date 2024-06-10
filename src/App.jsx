import { useEffect, useState } from "react";

const choices = ["paper", "rock", "scissor"];

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [winner, setWinner] = useState("");
  const [error, setError] = useState("");
  const [position, setPosition] = useState([
    { name: "user", count: 0 },
    { name: "computer", count: 0 },
  ]);


  useEffect(() => {
    showResult();
  }, [userSelection, computerSelection, position, error, winner]);

  const gameHandler = () => {
    const selection = userSelection.toLowerCase();  
    setError("");
    setComputerSelection(choices[Math.floor(Math.random() * (2 - 0 + 1)) + 0]);
    if (selection !== "paper" && selection !== "rock" && selection !== "scissor") {
      setError("Please Enter Valid Data");
    } else if (userSelection === "scissor" && computerSelection === "rock") {
      setWinner("Computer");
      setPosition([...position], position[1].count++);
    } else if (userSelection === "rock" && computerSelection === "paper") {
      setWinner("Computer");
      setPosition([...position], position[1].count++);
    } else if (userSelection === "paper" && computerSelection === "scissor") {
      setWinner("Computer");
      setPosition([...position], position[1].count++);
    } else if (userSelection === "scissor" && computerSelection === "paper") {
      setWinner("User");
      setPosition([...position], position[0].count++);
    } else if (userSelection === "rock" && computerSelection === "scissor") {
      setWinner("User");
      setPosition([...position], position[0].count++);
    } else if (userSelection === "paper" && computerSelection === "rock") {
      setWinner("User");
      setPosition([...position], position[0].count++);
    } else if (userSelection === "paper" && computerSelection === "paper") {
      setWinner("Equal");
    } else if (userSelection === "rock" && computerSelection === "rock") {
      setWinner("Equal");
    } else if (userSelection === "scissor" && computerSelection === "scissor") {
      setWinner("Equal");
    }
    console.log({ winner, position });
  };

  const showResult = () => {
    return (
      <div>
        {error && <h1>{error}</h1>}
        <h2>Computer Choose Is {computerSelection} </h2>
        <h2>User Choose Is {userSelection} </h2>
        <h2>Winner Is {winner} </h2>
        <h2>Computer : {position[1].count} </h2>
        <h2>user : {position[0].count} </h2>
        <p>----------------------------------------</p>
      </div>
    );
  };

  return (
    <>
      <h1>Rock,Paper,Scissors Game</h1>

      <div>
        <input type="text" value={userSelection} onChange={(e) => setUserSelection(e.target.value)} placeholder="Choose" />
        <button onClick={gameHandler} style={{ margin: "10px" }}>
          My Choose
        </button>
      </div>

      {showResult()}
    </>
  );
}

export default App;
