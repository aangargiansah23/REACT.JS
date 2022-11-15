import React, { Component } from "react";

class MenuMinuman extends Component {
   render() {
      return (
         <div style={{ border: '1px solid', width: 300, margin: 'auto' }}>
            <p>Nama Minuman : {this.props.namaMenu}</p>
            <p>Harga : RP. {this.props.hargaMenu}</p>
         </div>
      )
   }
}

export default MenuMinuman;