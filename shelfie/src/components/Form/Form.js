import React, {Component} from "react";
import "./Form.css"
import axios from "axios";

export default class Form extends Component{
  constructor(){
    super();

    this.state = {
      preview: "http://experienceidyllwild.com/images/no-image-available2.jpg",
      url: "",
      name: "",
      price: ""
    }
    this.addProduct = this.addProduct.bind(this);
    this.resetState = this.resetState.bind(this);
    this.verifyImg = this.verifyImg.bind(this);
  }

  verifyImg(){
    !this.state.url 
    ?
      this.setState({url: this.state.preview}, this.addProduct)
    :
      this.addProduct()
  }

  addProduct(){
    let body = {
      itemName: this.state.name,
      itemPrice: this.state.price,
      itemImg: this.state.url
    }
    axios.post("/api/products", body).then(res =>{
      this.props.update();
    });
    this.resetState();
  }

  resetState(){
    this.setState({url: "", name: "", price: ""})
  }

  render(){
    return(
      <div className="form">
        <img className="preview" src ={this.state.preview} />
        <p>Image URL</p>
        <input value = {this.state.url} onChange={(e) => this.setState({url: e.target.value})}placeholder="Add the image url"/>
        <p>Product Name</p>
        <input value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})}placeholder="Add name"/>
        <p>Price</p>
        <input value = {this.state.price} onChange={(e) => this.setState({price: e.target.value})}placeholder="Add price"/>
        <button className="btn" onClick={() => this.resetState()}>Cancel</button>
        <button className="btn" onClick={() => this.verifyImg()}>Add to inventory</button>
      </div>
    )
  }
}