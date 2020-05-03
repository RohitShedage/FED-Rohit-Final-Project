import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" component={User} />
      </Switch>
      <Footer />
    </>
  );
}
