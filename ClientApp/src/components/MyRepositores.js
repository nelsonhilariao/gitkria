import React, { Component } from 'react';
import axios from 'axios'
import Filter from './Filters/Filters'
import List from './List/List'

import './MyRepositores.css'

const api = {
  gitUrl: "https://api.github.com/users/nelsonhilariao/repos",
}

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
}

export class MyRepositories extends Component {
  static displayName = MyRepositories.name;

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

        // let newItem = res.data.items.map(item => {
        let newItem = res.data.map(item => {

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
      <div className='container MyRepo'>
        <h1>Meus Repositórios</h1>

        <p> Hi, I'm Nelson. Welcome to my GitKRIA repository! 👋</p>
        <Filter onRepos={handleRepos} items={githubData}></Filter>

        <div className='row'>
          {githubData.map((repo) => (
            <List className="col-md-12" item={repo} key={repo.id}></List>
          ))}
        </div>
      </div >
    );
  }
}
