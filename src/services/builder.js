export default function Builder (props) {
    let {props : user} = props;
    return (
        <div>
            <h5>{user.id} - {user.name}</h5>
            <p>{user.status}</p>
            <img src={user.image} alt="png"/>
        </div>
    )
}