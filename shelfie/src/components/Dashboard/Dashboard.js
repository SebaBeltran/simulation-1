import React, {Component} from "react";
import "./Dashboard.css";
import axios from "axios"


export default class Dashboard extends Component{
  constructor(){
    super();

    this.state = {
      products: [],
    }
    this.getProducts = this.getProducts.bind(this);
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
      axios.delete(`/api/products/${id}`).then(res => {
        this.getProducts();
      })
    }

  render(){
    let mapped = this.state.products.map((product, i) => {
      return (
        <div key={i} className="product">
          <div className="pic" style={ { backgroundImage: `url(${product.url})` } }>
          </div>
          <div className="details">
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
          <div className="product_btns">
            <button onClick={()=>{this.deleteProduct(product.id)}}>Delete</button>
            <button onClick={()=>{this.props.history.push(`/add/${product.id}`)}}>Edit</button>
          </div>  
          </div>
        </div>  
      )
    })
    return(
      <div>
        {mapped}
      </div>
    )
  }
}