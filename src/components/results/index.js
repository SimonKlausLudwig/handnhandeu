import React from "react";
import "./style.css";
import Block from "../block";

const Results = ({results, uri}) => {
    return (<div className={"myresults"}>
        {results.map(result => <Block uri={uri} key={result.email + result.name} email={result.email} header={result.name} description={result.description} tag={result.tag}/>)}
    </div>);
};

export default Results;
