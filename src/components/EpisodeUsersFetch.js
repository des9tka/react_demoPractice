import CharConstructor from "./CharConstructor";
import {useEffect, useState} from "react";

export default function EpisodeUsersFetch (props) {
    let {url : url} = props;
    let [char, setChar] = useState([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setChar(value);
            })
    }, [])

    return(
        <div>
            {console.log(char)}
        </div>
    )
}

