import React, { Component } from 'react';
import List from './List/List';
import "./Favorites.css"

export class Favorites extends Component {
  static displayName = Favorites.name;

  constructor (props) {
    super(props);
    this.state = { favorites: [], loading: true };
  }

  componentDidMount() {
    this.populateFavoriteData();
  }

  static renderFavoriteList(favorites) {
    return (
      <div>
        {favorites.map(favorite =>
          <List className="col-md-12" item={favorite} key={favorite.id_Repo_Git}></List>
        )}
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Favorites.renderFavoriteList(this.state.favorites);

    return (
      <div>
        <di>
        </di>
        <h1 id="tabelLabel" >Favoritos</h1>
        <p>Opss.. volte em breve esta área está sendo construida.</p>
        {contents}
      </div>
    );
  }

  async populateFavoriteData() {
    const response = await fetch('favorites');
    const data = await response.json();
    this.setState({ favorites: data, loading: false });
  }
}
