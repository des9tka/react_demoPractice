import './App.css';
import {data} from './data/data'
import ShowDataId from './components/ShowF'
import TestFunction from "./components/testFunction";

function App() {
  return (
   <div>
       {data.map((value, index) => <TestFunction value={value} key={index}/>)}
   </div>
  );
}

export default App;
