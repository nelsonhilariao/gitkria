import React, { Component } from 'react';
import List from './List/List';
import "./Favorites.css"

export class Favorites extends Component {
  static displayName = Favorites.name;

  constructor () {
    super();
    this.state = { favorites: [], loading: true };
  }

  async componentDidMount() {
    this.populateFavoriteData();
  }

  render() {
    let favorites = this.state.favorites

    return (
      <div>
        <div>
        </div>
        <h1 id="tabelLabel" >Favoritos</h1>
        <div className='row'>
          {favorites.map((favorite) => (
            <List className="col-md-12" item={favorite} key={favorite.id_Repo_Git}></List>
          ))}
        </div>
      </div>
    );
  }

  async populateFavoriteData() {
    const response = await fetch('favorites');
    let data = await response.json();
    data = data.map(item => {
      let obj = {
        id_Repo_Git: item.id,
        name: item.name,
        favorite: item.favorite,
        description: item.description,
        html_url: item.html_url,
        updated_at: item.updated_at,
        owner: {
          login: item.login,
          id: item.id,
          avatar_url: item.avatar_url
        },
      }
      return obj
    })
    this.setState({ favorites: data, loading: false });
  }
}