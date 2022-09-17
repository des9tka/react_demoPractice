import TestFunction from "../components/testFunction";
import {data} from "../data/data";

export default function Mapping () {
    return (
        data.map((value, index) => <TestFunction value={value} key={index}/>)
    )
}