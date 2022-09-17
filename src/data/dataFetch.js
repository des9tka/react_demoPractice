import {useEffect, useState} from "react";
import Builder from '../components/Builder'

export default function DataFetch () {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])


    return(
        <div>
            {users.map((value, index) => <Builder users={value} key={index}/>)}
        </div>
    )
}