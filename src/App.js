import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Container from "./component/Container";
import List from "./component/List";
import HomePage from "./pages/HomePage";
import AddTodoPage from "./pages/AddTodoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/addtodo" component={AddTodoPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
