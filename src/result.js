function Result(props) {
    return (
        <div>
            <h1>Results</h1>
            <hr />
            <ul>{props.children}</ul>
        </div>
    );
}

export default Result;