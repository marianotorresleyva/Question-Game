import { useState } from "react";
import Question from "./components/question.jsx";
import "./App.css";
import LinearProgressWithLabel from "./components/linearProgress.jsx";
import Answers from "./components/answers.jsx";
import { Button } from "@mui/material";

function App() {
    let [count, setCount] = useState(0);
    let [disable, setDisable] = useState(false);

    const fromClick = () => {
        if (count >= 4) {
            setDisable(true);
            return;
        }
        setCount((count += 1));
    };

    return (
        <div className="App">
            <LinearProgressWithLabel value={count} />
            <Question val={count} />
            <Answers increment={fromClick} val={count} toNext={fromClick} />
            <Button variant="contained" disabled={disable} onClick={fromClick}>
                Next
            </Button>
        </div>
    );
}
export default App;
