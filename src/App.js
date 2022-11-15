// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "Codepolitan",
    }
  }

  handleGantiNama = (resto) => {
    this.setState ({namaResto: resto})
  }

  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <button onClick={() => this.handleGantiNama("Gaming")}>Ganti Nama Resto</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan />
        <MenuMakanan />

        <h2>Menu Minuman</h2>
        <MenuMinuman />
        <MenuMinuman />
      </div>
    );
  }
}

export default App;
