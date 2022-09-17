import EpisodeUsersFetch from "./EpisodeUsersFetch";

export default function Builder (props) {
    let {item: episode} = props;
    let usersArray = episode.characters.splice(0, 3)

    return (
        <div>
            <h5>{episode.id} - {episode.name}</h5>
            <p>{episode.air_date} - {episode.episode}</p>
            {usersArray.map((url, index) => <EpisodeUsersFetch url={url} key={index}/>)}
        </div>
    )
}

