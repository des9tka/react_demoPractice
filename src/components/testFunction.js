export default function TestFunction (props) {
    const {value} = props;
    return (
        <div>
            <h3>{value.id} - {value.name}</h3>
            <p>website - {value.website}</p>
            <p>street - {value.address.street}</p> <br/>
        </div>
    )
}

