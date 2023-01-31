import React, { Component } from 'react';
import "./Challenge2.css"

export class Challange extends Component {
  static displayName = Challange.name;

  constructor () {
    super()
    this.state = {
      githubData: []
    }
  }


  render() {
    return (
      <div className='container MyRepo'>
        <h1>Desafio 2</h1>

        <div>
          <h4>DESENVOLVA METODOS QUE RESOLVA OS SEGUINTES PROBLEMAS:</h4>
        </div>
        <br></br>
        <div>
          <p>
            1. Escreva um programa onde é dado a variável arrInicial que é do tipo array com os seguintes valores [1,2,3,4,5,6,7,8,9,0].
            De modo que seja retornado esses mesmos valores, porém com a ordem invertida.
          </p>
          <p>PODE: escrever em qualquer linguagem (C#, JS, português estruturado e etc);</p>
          <p>NÃO PODE: Utilizar instruções de ordenação das linguagens como Sort, Order By, LINK ETC.;</p>
        </div>
        <br></br>
        <div>
          <p className='response'>Resposta:</p>
          <img src={'img/ex1.png'}></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <p>2. Escreva um programa que mostre na tela os número de 1 até 100.</p>
          <p>PODE: escrever em qualquer linguagem (C#, JS, português estruturado e etc);</p>
          <p>NÃO PODE: Utilizar laços de repetição, por exemplo: do-while, for, foreach e etc.</p>
        </div>
        <br></br>
        <div>
          <p className='response'>Resposta:</p>
          <img src={'img/ex2.png'}></img>
        </div>
      </div >
    );
  }
}
