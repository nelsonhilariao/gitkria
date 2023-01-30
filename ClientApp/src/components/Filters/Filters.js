import React, { useState } from 'react';
import axios from 'axios'
import './Filters.css'

const api = {
  baseUrl: "https://api.github.com/search/repositories?q=",
}

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
}


const Filter = (props) => {
  const [searchText, setSearchText] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    if (!searchText) return

    axios
      .get(api.baseUrl + searchText)
      .then((res) => {
        console.log(res)

        res.data.items = res.data.items.map(item => {

          let date = new Date(item.updated_at)
          item.updated_at = new Intl.DateTimeFormat('pt-BR', options).format(date)

          return item
        })

        setRepos(res.data.items)
        props.onRepos(res.data.items)
      })
  };

  return (
    <div className="search-bar" >
      <input
        type="text"
        placeholder="Buscar repositório"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button onClick={handleSearch}>Filtrar</button>
    </div>
  );
};

export default Filter;