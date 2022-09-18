import {useEffect} from "react";

export default function CharConstructor (props) {
    let {item : char} = props;

    console.log(char)

    return(
        <div className={'charDiv'}>
            <h5>{char.id} - {char.name}</h5>
            <p>status: {char.status}<br/>
                gender: {char.gender}</p>
            <img src={char.image} alt="image"/>
        </div>
    )
}