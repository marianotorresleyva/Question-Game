import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Answers(props) {
    let [object, setObject] = useState({});
    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) =>
                Object.entries(data).map((val) => Object.values(val[1])[0])
            )
            .then((obj) => setObject(obj[props.val]))
            .catch(function (error) {
                console.log(error);
            });
    }, [props.val]);
    const next = () => {
        props.toNext();
    };
    let list = [];
    for (let [key, value] of Object.entries(object)) {
        if (value) {
            list.push(
                <li key={crypto.randomUUID()}>
                    <Button
                        sx={{
                            display: "flex",
                            margin: "10px",
                            width: "100%",
                            border: "1px dashed grey",
                        }}
                        onClick={next}
                    >
                        {key}
                    </Button>
                </li>
            );
            continue;
        }
        list.push(
            <li key={crypto.randomUUID()}>
                <Button
                    sx={{
                        display: "flex",
                        width: "100%",
                        margin: "10px",
                        border: "1px dashed grey",
                    }}
                >
                    {key}
                </Button>
            </li>
        );
    }

    return (
        <Container>
            <ul>{list}</ul>
        </Container>
    );
}
