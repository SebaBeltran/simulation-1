import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts(){
    axios.get("/api/products").then(res =>{
      this.setState({products: res.data})
    })
  }

  deleteProduct(id){
    console.log(id)
    axios.delete(`/api/products/${id}`).then(res => {
      this.getProducts();
    })
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <Dashboard list={this.state.products} delete={this.deleteProduct}/>
        <Form update={this.getProducts} />
        {/* <Header />
        <Product /> */}
      </div>
    );
  }
}

export default App;
