import {useEffect} from "react";

export default function CharConstructor (props) {
    let {item : char} = props;


    return(
        <div>
            <h3>{char.id} - {char.name}</h3>
            <p>{char.status} - {char.gender}</p>
            <img src={char.image} alt="image"/>
        </div>
    )
}