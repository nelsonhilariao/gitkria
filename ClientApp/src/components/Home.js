import React, { Component } from 'react'
import axios from 'axios'
import Filter from './Filters/Filters'
import List from './List/List'
import "./Home.css"

const amountPerPage = 20
const api = {
  gitUrl: "https://api.github.com/search/repositories?",
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
      githubData: [],
      loadMore: false,
      currentPage: 1,
      currentSearch: '',
    }
  }


  componentDidMount() {
    this.getRepositories(null, null, 'componentDidMount')
  }


  getRepositories = (search, page, from) => {
    if (!search) search = 'test'
    if (!page) page = 1
    const params = {
      q: search,
      sort: 'updated',
      order: 'asc',
      per_page: amountPerPage,
      page
    }

    const query = Object.entries(params)
      .map(entry => entry.join('='))
      .join('&')

    axios
      .get(api.gitUrl + query)
      .then((res) => {

        let newItem = res.data.items.map(item => {

          let date = new Date(item.updated_at)
          item.updated_at = new Intl.DateTimeFormat('pt-BR', options).format(date)

          return item
        })

        this.setState({ loadMore: newItem.length !== amountPerPage ? false : true })
        this.setState({ currentPage: page })
        if (!page || page === 1) this.setState({ githubData: newItem })
        else this.setState({ githubData: this.state.githubData.concat(newItem) })
      })
  }

  loadMore = () => {
    this.getRepositories(this.state.currentSearch, this.state.currentPage + 1, 'loadMoreBtn')
  }

  LoadMoreBtn = () => {
    let button
    if (this.state.loadMore) button = <button className="load-more" onClick={this.loadMore} >Carregar mais</button>

    return (
      <div style={{ "textAlign": "center" }}>
        {button}
      </div>
    )
  }

  render() {
    const { githubData } = this.state

    const handleSearch = (searchText) => {
      this.setState({ currentSearch: searchText })
      this.getRepositories(searchText, null, 'handleSearch')
    }

    return (
      <div className='container App' >
        <Filter onSearch={handleSearch}></Filter>
        <div className='row'>
          {githubData.map((repo) => (
            <List className="col-md-12" item={repo} key={repo.id}></List>
          ))}

        </div>
        <this.LoadMoreBtn></this.LoadMoreBtn>
      </div >
    )
  }
}