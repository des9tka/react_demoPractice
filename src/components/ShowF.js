import {data} from '../data/data'

function ShowDataId () {
    return (
        data.map(value => <div key={value.id}>
            <h3>{value.id} - {value.name}</h3>
            <p>website - {value.website}</p>
            <p>street - {value.address.street}</p> <br/>
        </div>)
    )
}

export default ShowDataId;
