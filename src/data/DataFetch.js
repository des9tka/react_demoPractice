import {useEffect, useState} from "react";
import Builder from '../components/Builder'

export default function DataFetch () {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(value => value.json())
            .then(value => {
                setUsers(value.results);
            })
    }, [])


    return(
        <div className={'mainDiv'}>
            {users.map(value => <Builder item={value}/>)}
        </div>
    )
}