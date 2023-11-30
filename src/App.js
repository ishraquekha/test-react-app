import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [getData, setData] = useState([]);
  
  const callApi=async()=>{
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data.data)
    setData(data.data)
  }
  useEffect(()=>{
    callApi()
  },[])

const filterData =(e)=>{
  // e.preventDefault();
  console.log(e.target.value)
  let arr= []
  getData.filter(data=>{
    if(data.name.toLowerCase().includes(e.target.value.toLowerCase())){
      arr.push(data)
    }
  })
    setData(arr)
}

  return (
    <div className="App">
      <input type='text' placeholder='Search' onChange={filterData}/>
      <button onClick={callApi}>reset</button>
      <table style={{gap:'10'}}>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
        {getData &&
        getData?.map((info,i)=>{
          return (
            <tr key={i}>
              <td>{info.id}</td>
              <td>{info.name}</td>
            </tr>
          )
        })}
      </table>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
