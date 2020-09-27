import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//  HashRouter, BrowserRouter
//  exact={true} 오직 / 일때만 컴포넌트 적용
//  Link는 Router 안에서만 ..
//  a href는 항상 새로고침해서 비용이 비싸고 속도 느림
//  Link to로 대체
//    <Route path="/movie-detail" component={Detail} /> 

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} /> 
    </HashRouter>
  );
}

export default App;
