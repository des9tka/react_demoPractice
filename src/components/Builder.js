import EpisodeUsersFetch from "./EpisodeUsersFetch";

export default function Builder (props) {
    let {item: episode} = props;
    let usersArray = episode.characters.splice(0, 3)

    return (
        <div className={'episodeDiv'}>
            <div className={'episodeInfo'}>
                 <h3>{episode.id} - {episode.name}</h3>
                 <p>{episode.air_date} - {episode.episode}</p>
            </div>
            <div className={'charMainDiv'}>
                {usersArray.map((url, index) => <EpisodeUsersFetch url={url} key={index}/>)}
            </div>
        </div>
    )
}

