
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [currancy, setCurrancy] = useState([])
  const searchHandler =(e)=> {
    setSearch(e.target.value);
  }
  useEffect(()=>{
    axios.get('https://openapiv1.coinstats.app/coins',{
      headers: {'X-API-KEY': '6ZUNZzAn330T+TQ3+VWRVrAO6lchaZ3L4ge7b4c2V54='}
    }
    ).then((response)=>{ setCurrancy(response.data.result) })
  },[])

  return (
    <div className="App">
      <h2>Crypto Currency App By Amirhossein</h2>
      <input type="text" name='searchBar' onChange={searchHandler} placeholder='Search...'/>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Volume(24)</th>
          </tr>
        </thead>
        <tbody>
        {
          currancy.filter((val) => ( val.name.toLowerCase().includes(search.toLowerCase()) )
    ).map((val) => {
      return <tr>
        <td className='rank'>{val.rank}</td>
        <td className='logo'>
          <a href={val.websiteUrl}>
            <img src={val.icon}/>
          </a>
          <p>{val.name}</p>
        </td>
        <td className='symbol'>${val.marketCap}</td>
        <td>${val.price.toFixed(2)}</td>
        <td>{val.availablesupply}</td>
        <td>{val.volume.toFixed(0)}</td>
      </tr>
    }
    )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
