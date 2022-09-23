//import logo from './logo.svg';
import './App.css';
import data from './data.json';
const currentDay = Date();
const date = new Date(currentDay);
const day = date.getDay();


let am0 = (data[0].amount) * 10;
let am1 = (data[1].amount) * 10;
let am2 = (data[2].amount) * 10;
let am3 = (data[3].amount) * 10;
let am4 = (data[4].amount) * 10;
let am5 = (data[5].amount) * 10;
let am6 = (data[6].amount) * 10;

let checkDay = data[day];

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>{currentDay}</p>
        <p>{date.toString()}</p>
        <p>{day}</p>
        <p>{checkDay.day}</p>
     </header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <div style={{border: "1px solid purple", width: am1}}>
                <p>{data[1].day}</p>        
                <p>£ {data[1].amount}</p>
              </div>
              <div style={{border: "1px solid purple", width: am2}}>
                <p>{data[2].day}</p>        
                <p>£ {data[2].amount}</p>
              </div>
              <div style={{border: "1px solid purple", width: am3}}>
                <p>{data[3].day}</p>        
                <p>£ {data[3].amount}</p>
              </div>
              <div style={{border: "1px solid purple", width: am4}}>
                <p>{data[4].day}</p>        
                <p>£ {data[4].amount}</p>
              </div>
              <div style={{border: "1px solid purple", width: am5}}>
                <p>{data[5].day}</p>        
                <p>£ {data[5].amount}</p>
              </div>
              <div style={{border: "1px solid purple", width: am6}}>
                <p>{data[6].day}</p>        
                <p>£ {data[6].amount}</p>
              </div>
              <div style={{border:"1px solid purple", width: am0}}>
                <p>{data[0].day}</p>        
                <p>£ {data[0].amount}</p>
              </div>
    </div>
  );
}

export default App;
