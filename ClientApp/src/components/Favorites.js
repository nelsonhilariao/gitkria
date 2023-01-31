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

    console.log({ favorites })
    return (
      <div>
        <div>
        </div>
        <h1 id="tabelLabel" >Favoritos</h1>
        <p>Opss.. volte em breve esta área está sendo construida.</p>
        <div>
          {favorites.map((favorite) => (
            <List className="col-md-12" item={favorite} key={favorite.id_Repo_Git}></List>
          ))}
        </div>
      </div>
    );
  }

  async populateFavoriteData() {
    const response = await fetch('api/favorites');
    const data = await response.json();
    this.setState({ favorites: data, loading: false });
  }
}
