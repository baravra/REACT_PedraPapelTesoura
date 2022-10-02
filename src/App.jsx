import React, { useState } from 'react'

import pedra from './assets/pedra.svg'
import papel from './assets/papel.svg'
import tesoura from './assets/tesoura.svg'

import btnPedra from './assets/btnPedra.svg'
import btnPapel from './assets/btnPapel.svg'
import btnTesoura from './assets/btnTesoura.svg'

import vitoria from './assets/win.svg'
import inter from './assets/inter.svg'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      papel: 0,
      pedra: 0,
      tesoura: 0,
      myScore: 0,
      enemyScore: 0,
      myChoice: '',
      enemyChoice: '',
      empate: 0,
      resultado: '',
      myIcon: inter,
      enemyIcon: inter,
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick = (e) => {
    const choice = e.target.id
    document.getElementById("loading").style.display = "inline-block"

    this.setState({ myChoice: choice })
    const enemyChoice = Math.floor(Math.random() * 3)
    if (enemyChoice === 0) {
      this.setState({ enemyChoice: 'papel' })
    } else if (enemyChoice === 1) {
      this.setState({ enemyChoice: 'pedra' })
    } else {
      this.setState({ enemyChoice: 'tesoura' })
    }

    setTimeout(() => {
      document.getElementById("loading").style.display = "none"
      this.setState({ myChoice: choice })

      if (choice === 'papel') {
        this.setState({ papel: this.state.papel + 1 })
        this.setState({ myIcon: papel })
      } else if (choice === 'pedra') {
        this.setState({ pedra: this.state.pedra + 1 })
        this.setState({ myIcon: pedra })
        this.setState({ myChoice: 'pedra' })
      } else {
        this.setState({ tesoura: this.state.tesoura + 1 })
        this.setState({ myIcon: tesoura })
        this.setState({ myChoice: 'tesoura' })
      }

      if (this.state.enemyChoice == 'papel') {
        this.setState({ enemyIcon: papel })
      } else if (this.state.enemyChoice == 'pedra') {
        this.setState({ enemyIcon: pedra })
      } else {
        this.setState({ enemyIcon: tesoura })
      }

      //EMPATE
      if (this.state.myChoice == this.state.enemyChoice) {
        this.setState({ empate: this.state.empate + 1 })

        document.getElementById('vit1').style.display = 'none'
        document.getElementById('vit2').style.display = 'none'
      }
      // VITORIAS
      else if (this.state.myChoice == 'papel' && this.state.enemyChoice == 'pedra') {
        this.setState({ myScore: this.state.myScore + 1 })

        document.getElementById('vit1').style.display = 'inline-block'
        document.getElementById('vit2').style.display = 'none'
      } else if (this.state.myChoice == 'pedra' && this.state.enemyChoice == 'tesoura') {
        this.setState({ myScore: this.state.myScore + 1 })

        document.getElementById('vit1').style.display = 'inline-block'
        document.getElementById('vit2').style.display = 'none'
      } else if (this.state.myChoice == 'tesoura' && this.state.enemyChoice == 'papel') {
        this.setState({ myScore: this.state.myScore + 1 })

        document.getElementById('vit1').style.display = 'inline-block'
        document.getElementById('vit2').style.display = 'none'
      }
      // DERROTAS
      else if (this.state.myChoice == 'papel' && this.state.enemyChoice == 'tesoura') {
        this.setState({ enemyScore: this.state.enemyScore + 1 })

        document.getElementById('vit1').style.display = 'none'
        document.getElementById('vit2').style.display = 'inline-block'
      } else if (this.state.myChoice == 'pedra' && this.state.enemyChoice == 'papel') {
        this.setState({ enemyScore: this.state.enemyScore + 1 })

        document.getElementById('vit1').style.display = 'none'
        document.getElementById('vit2').style.display = 'inline-block'
      } else if (this.state.myChoice == 'tesoura' && this.state.enemyChoice == 'pedra') {
        this.setState({ enemyScore: this.state.enemyScore + 1 })

        document.getElementById('vit1').style.display = 'none'
        document.getElementById('vit2').style.display = 'inline-block'
      }


    }, 2500)


  }

  render() {
    return (
      <div className='App' >

        <div className='flex'>
          <div>
            <h2>Jogador <img src={vitoria} alt="vitoria" id='vit1' /> </h2>
            <h4>{this.state.myScore}</h4>
          </div>
          <div>
            <h2>Máquina <img src={vitoria} alt="vitoria" id='vit2' />  </h2>
            <h4>{this.state.enemyScore}</h4>
          </div>
        </div>

        <div className="lds-roller" id='loading'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className='flex'>
          <img src={this.state.myIcon} alt="myIcon" id='jogador' />
          <img src={this.state.enemyIcon} alt="enemyIcon" id='maquina' />
        </div>

        <div className='flex-juntos'>
          <button onClick={this.handleClick}><img id="papel" src={btnPapel} alt="Escolher Papel" /></button>
          <button onClick={this.handleClick}><img id="pedra" src={btnPedra} alt="Escolher Pedra" /></button>
          <button onClick={this.handleClick}><img id="tesoura" src={btnTesoura} alt="Escolher Tesoura" /></button>
        </div>

        <div className='infos'>
          <p><b>Empates:</b> {this.state.empate}</p>
          <p><b>Vezes escolhidas papel:</b> {this.state.papel}</p>
          <p><b>Vezes escolhidas pedra:</b> {this.state.pedra}</p>
          <p><b>Vezes escolhidas tesoura:</b> {this.state.tesoura} </p>
        </div>

      </div>
    )
  }
}

export default App
