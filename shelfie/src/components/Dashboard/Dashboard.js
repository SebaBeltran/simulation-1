import React, {Component} from "react";
import "./Dashboard.css";


export default class Dashboard extends Component{
  constructor(){
    super();

    this.state = {
      products: []
    }
  }

  render(){
    let mapped = this.props.list.map((product, i) => {
      return (
        <div key={i} className="product">
          <div className="pic" style={ { backgroundImage: `url(${product.url})` } }>
          </div>
          <div className="details">
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
          <div className="product_btns">
            <button onClick={()=>{this.props.delete(product.id)}}>Delete</button>
            <button onClick={()=>{this.props.delete(product.id)}}>Edit</button>
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