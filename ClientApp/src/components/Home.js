import React, { Component } from 'react';
import axios from 'axios'
import Filter from './Filters/Filters'
import List from './List/List'

const api = {
  gitUrl: "https://api.github.com/search/repositories?q=test&sort=stars&page=1",
  apiUrl: "https://localhost:7088/favoritemodels/favorites"
}

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
}

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      githubData: []
    }
  }

  componentDidMount() {
    axios
      .get(api.gitUrl)
      .then((res) => {
        console.log(res)

        let newItem = res.data.items.map(item => {

          let date = new Date(item.updated_at)
          item.updated_at = new Intl.DateTimeFormat('pt-BR', options).format(date)

          return item
        })


        this.setState({ githubData: newItem })
      })
  }

  render() {
    const { githubData } = this.state;

    const handleRepos = (newRepos) => {
      this.setState({ githubData: newRepos })
    }

    return (
      <div className='container App' >
        <Filter onRepos={handleRepos} items={githubData}></Filter>
        <div className='row'>
          {githubData.map((repo) => (
            <List className="col-md-12" item={repo} key={repo.id}></List>
          ))}
        </div>
      </div >
    )
  }
}