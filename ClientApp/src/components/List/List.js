import React, { useState } from 'react';
import './List.css'


const List = (data) => {

  const [isFavorite, setIsFavorite] = useState(data.item.favorite);

  const Data = (props) => {
    return <p className="description" >
      <span className="hightlight">{props.title}</span>
      {props.item}</p>
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const FavoriteItem = ({ item }) => {
    if (!item) return null;

    const favorite = (e, repo) => {
      repo.favorite = !repo.favorite
      setIsFavorite(repo.favorite)

      e.stopPropagation();

      console.log({ item })
    }

    let img;
    if (isFavorite) img = <img className="icons favorite" src={'icons/heart-solid.svg'} />
    else img = <img className="icons not-favorite" src={'icons/heart-regular.svg'} />

    return (
      <div>
        <button className="favorite-btn" onClick={(e) => favorite(e, item)} >
          {img}
        </button>
      </div >
    );
  }

  return (
    <div className='col-md-3 github' onClick={() => openInNewTab(data.item.html_url)} >
      <div>
        <FavoriteItem item={data.item} />
      </div>
      <div style={{
        "minHeight": "372px"
      }}>
        <img src={data.item.owner.avatar_url} width="230" height="150" />
        <br />
        <br />

        <Data title="Desenvolvedor: " item={data.item.owner.login} />
        <Data title="Projeto: " item={data.item.name} />
        <Data title="Descrição: " item={data.item.description} />
        <Data title="Linguagem: " item={data.item.language} />
        <Data title="Atualizado em: " item={data.item.updated_at} />
      </div>
      <div className="center">
        <button className="btn">Detalhes</button>
      </div>
    </div>
  )
};

export default List;