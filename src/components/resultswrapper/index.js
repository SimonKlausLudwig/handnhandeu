import React, {useEffect, useState} from "react"
import Button from "../../components/button";
import Header from "../../components/header";
import Results from "../../components/results";
import Text from "../../components/text";
import FixedLayout from "../../components/layout/fixedlayout";
import {e18n} from "../../../i18n";

const ResultsWrapper = ({id, notFound, resultsFound, resultsDescription, createButton, uri, orange}) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`https://api.myjson.com/bins/${id}`).then(d => d.json()).then(restResults => {
                var plz = parseInt(new URL(window.location.href).searchParams.get("plz"));

                restResults = restResults.map(i => ({...i, dif: Math.abs(i.tag - plz)}));
                setResults(restResults.sort(function (a, b) {
                    var res = (!plz) ? (a.tag ? 0 : -1) : (a.dif - b.dif);
                    console.log(res);
                    return res;
                }));


            }
        );
    }, []);

    return (
        <FixedLayout orange={orange} className={"resultspage"} bottom={<div>
            {notFound && <Text>{notFound}</Text>}
            <Button onClick={() => window.location.href = `/create/${uri}`}>{createButton}</Button>
        </div>}>
            {results.length > 0 && <Header>{results.length} {resultsFound}</Header>}
            {results.length <= 0 && <Header>{e18n.searching}</Header>}
            {results.length > 0 && <Text>{resultsDescription}</Text>}
            {results.length <= 0 && <Text>{e18n.please_wait}</Text>}
            <Results uri={uri} results={results}/>
        </FixedLayout>)
}

export default ResultsWrapper;
