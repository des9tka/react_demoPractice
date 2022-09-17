import {useEffect, useState} from "react";
import Builder from "../services/builder";

export default function FetchUsers () {
    let [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setUsers(value.results.splice(0, 5))
            })
    }, [])

    return (
        <div>
            {users.map((value, index) => <Builder props={value} key={index}/>)}
        </div>
    )
}