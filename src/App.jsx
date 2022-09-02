import { LinearProgress, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "./question.jsx";
import "./App.css";
import axios from "axios";

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        color="text.primary"
                    >{`${Math.round(props.value)} / 5`}</Typography>
                </Box>
                <Box sx={{ width: "80%", mr: 1 }}>
                    <LinearProgress
                        className="set-border"
                        variant="determinate"
                        sx={{ height: "25px" }}
                        value={props.value * 20}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >{`${Math.round(props.value * 20)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

function Next(props) {
    /**
     * Validaciones correspondientes antes de pasar al siguiente
     * si la respuesta es correcta a los 10 segundo next
     * si es incorrecta marcar como incorrecta
     *
     * */
}

const useFetchAnswers = () => {
    let [object, setObject] = useState({});
    useEffect(() => {
        (async function () {
            try {
                axios
                    .get("data.json")
                    .then((response) => response.data)
                    .then((data) =>
                        Object.entries(data).map(
                            (val) => Object.values(val[1])[0]
                        )
                    )
                    .then((obj) =>
                        obj.map((data) => new Map(Object.entries(data)))
                    )
                    .then((map) => setObject(new Map(Object.entries(map))))
                    .catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return object;
};
const useFetchQuestions = () => {
    let [object, setObject] = useState({});
    useEffect(() => {
        (async function () {
            try {
                axios
                    .get("data.json")
                    .then((response) => response.data)
                    .then((data) =>
                        Object.entries(data).map(
                            (val) => Object.keys(val[1])[0]
                        )
                    )
                    .then((pure) => setObject(pure))
                    .catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return object;
};

function App() {
    let answers = useFetchAnswers();
    let questions = useFetchQuestions();

    let [value, setValue] = useState(1);

    const toClick = (bool) => {
        if (bool + "" == "true") {
            setValue((value += 1));
        }
    };

    return (
        <div className="App">
            <LinearProgressWithLabel value={value} />
        </div>
    );
}
export default App;
