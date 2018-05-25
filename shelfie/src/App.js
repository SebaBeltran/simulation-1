import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import axios from "axios";
import {Route, Switch} from "react-router-dom";

export default function() {
    return (
      <div>
        <Header />
        <div  className="App">
        <Switch>
          <Route component={Dashboard} path="/" exact />
          <Route component={Form} path="/add"/>
          <Route component={Form} path="/add/:id"/>
        </Switch>
        </div>
      </div>
    );
  }
