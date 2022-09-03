import { useState } from "react";
import { Button } from "@mui/material";
import Question from "./components/question.jsx";
import LinearProgressWithLabel from "./components/linearProgress.jsx";
import Answers from "./components/answers.jsx";
import BasicModal from "./components/modal.jsx";
import "./App.css";

function App() {
    let [count, setCount] = useState(0);
    let [disable, setDisable] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const fromClick = () => {
        if (count >= 4) {
            setDisable(true);
            setOpen(true);
            return;
        }
        setCount((count += 1));
    };
    function reboot(e) {
        e.preventDefault();
        let cli = document.getElementById("client").value;
        alert(cli);
        setCount(0);
        setOpen(false);
        setDisable(false);
    }
    return (
        <div className="App">
            <LinearProgressWithLabel value={count} />
            <Question val={count} />
            <Answers increment={fromClick} val={count} toNext={fromClick} />
            <Button variant="contained" disabled={disable} onClick={fromClick}>
                Next
            </Button>
            <BasicModal open={open} handleClose={handleClose} reboot={reboot} />
        </div>
    );
}
export default App;
