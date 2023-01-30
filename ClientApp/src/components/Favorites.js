import React, { Component } from 'react';

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
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID usuário</th>
            <th>ID Repositório</th>
            <th>Usuário</th>
            <th>Repositório</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map(favorite =>
            < tr key={favorite.date} >
              <td>{favorite.id_user_git}</td>
              <td>{favorite.id_repo_git}</td>
              <td>{favorite.user_name}</td>
              <td>{favorite.repository}</td>
            </tr>
          )}
        </tbody>
      </table >
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Favorites.renderFavoriteList(this.state.favorites);

    return (
      <div>
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
