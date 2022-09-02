function Answers(props) {
    let i = 0;
    let answers = [];
    for (const [key, value] of Object.entries(props.list)) {
        answers.push(
            <li key={i}>
                <button onClick={props.fn(value)}>{key}</button>
                <p>{value + ""}</p>
                {/* <button>{key}</button> */}
            </li>
        );
        i++;
    }

    return <ul>{answers}</ul>;
}

export default function Question(props) {
    return (
        <>
            <h3> {props.question}</h3>
            {/* <Answers list={props.answer} /> */}
            <Answers list={props.answer} fn={props.managerEvent} />
        </>
    );
}
