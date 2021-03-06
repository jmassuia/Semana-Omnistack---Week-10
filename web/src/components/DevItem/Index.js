import React from 'react';
import './Style.css';

function DevItem({ dev }){
    return(
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil</a>
        <button type="button" id="delete-dev">Excluir</button>
      </li>
    );
}

export default DevItem;