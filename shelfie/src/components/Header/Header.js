import React, {Component} from "react";
import "./Header.css"
import {Link} from "react-router-dom"

export default function() {
  return (
    <div className="header">
      <h1>Header component</h1>
      <Link to="/">
      <button>Dashboard</button>
      </Link>
      <Link to="/add">
      <button>AddInventory</button>
      </Link>
    </div>  
  )
}