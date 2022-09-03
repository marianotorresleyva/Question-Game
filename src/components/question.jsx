import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
const useFetchQuestions = () => {
    let [object, setObject] = useState({});
    useEffect(() => {
        (async function () {
            axios
                .get("data.json")
                .then((response) => response.data)
                .then((data) =>
                    Object.entries(data).map((val) => Object.keys(val[1])[0])
                )
                .then((pure) => setObject(pure))
                .catch(function (error) {
                    console.log(error);
                });
        })();
    }, []);
    return object;
};
export default function Question(props) {
    let questions = useFetchQuestions();
    // console.log(questions);
    return (
        <>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="title" color="text.primary">
                    {questions[props.val]}
                </Typography>
            </Box>
        </>
    );
}
