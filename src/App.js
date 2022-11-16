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
      namaPembeli: "",
      keterangan: "",
      JenisPembayaran: "",
      menuMakanan: [
        { nama: 'Ayam Bakar', harga: 25000, stock: 10 },
        { nama: 'Nasi Goreng', harga: 22000, stock: 0 },
      ],
      menuMinuman: [
        { id: 1, nama: 'Juice Melon', harga: 15000 },
        { id: 2, nama: 'Milkshake Strawberry', harga: 19000 },
        { id: 3, nama: 'Juice Tomat', harga: 12000 },
        { id: 4, nama: 'Juice Mangga', harga: 14000 },
        { id: 5, nama: 'Juice Alpukat', harga: 18000 },
      ]
    }

  }

  handleGantiNama = (resto) => {
    this.setState({ namaResto: resto })
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className='App'>
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <button className='btn btn-primary' onClick={() => this.handleGantiNama("Programmer")}>Ganti Nama Resto</button>

        <div className="row" style={{marginTop: "10px"}}>
          <div className="col-md-4 offset-md-4">
            <form action="">
              <div className="form-group">
                <label> Nama Pembeli :</label>
                <input type="text" className="form-control" name="namaPembeli" onChange={this.handleChange}value={this.state.namaPembeli}/>
                <small>Nama Pembeli : {this.state.namaPembeli}</small>
              </div>

              <div className="form-group">
                <label for="">Keterangan</label>
                <textarea 
                  className="form-control"
                  name="keterangan"
                  onChange={this.handleChange}
                  value={this.state.keterangan}
                >
                </textarea>
                <small>Keterangan : {this.state.keterangan}</small>
              </div>

              <div className="form-group">
                <label for="">Jenis Pembayaran</label>
                <select 
                  className="form-control"
                  name="JenisPembayaran"
                  onChange={this.handleChange}
                  value={this.state.JenisPembayaran}
                >
                  <option value="cash">Cash</option>
                  <option value="kartukredit">Kartu Kredit</option>
                  <option value="voucher">Voucher</option>
                </select>
                <small>Jenis Pembayaran : {this.state.JenisPembayaran}</small>
              </div>
            </form>
          </div>
        </div>

        <h2>Menu Makanan</h2>
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />
        <h2 className="mt-4">Menu Minuman</h2>
        {this.state.menuMinuman.map((menu,index) =>
          <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga}/>
        )}
      </div>

      
    );
  }
}

export default App;
