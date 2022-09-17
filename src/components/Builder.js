export default function Builder (props) {
    let {value: user} = props;

    return (
        <div>
            <h1>{user.id} - {user.name}</h1>
            <p>{user.air_date} - {user.episode}</p>
        </div>
    )
}

