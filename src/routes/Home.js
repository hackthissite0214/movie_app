
//import PropTypes from 'prop-types';
//import { render } from '@testing-library/react';
/*
//import logo from './logo.svg';
//import './App.css';
//import Food from "./Food";

//  props.favourite === { favourite }
//  아래 Compoment favourite 와 Food favourite 부분은 이름이 같아야 한다
//function Food({ favourite }) {
//  return <section class="container">I like {favourite}</section class="container">;
//}

function Food({ name, picture, rating}) {
  return <section class="container">
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </section class="container">
}

//  체크 ,, 무조건 propTypes라고 설정
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

//  웹사이트에 동적 데이터를 추가하는 방법
//  데이터가 이미 API에서 왔다고 가정!
//  오브젝트 배열
/*
array안에 있는 차일드들은 고유한(unique) key prop을 가져야 한다.
리액트에서는 엘리먼트가 많을 경우 고유한 key라는 것을 정해주어야한다.
그래서, movies 배열에 id라는 것을 하나 더 만든후, 중복되지 않게 작성


const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxb8bBaPlvb4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxb8bBaPlvb4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxb8bBaPlvb4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxb8bBaPlvb4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 5.5
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxb8bBaPlvb4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.7
  }
];

/*
function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}



//  father(App) -> children(Food) props를 사용해서 data 보내기
// jsx => HTML + Javascript
//  Component를 가져와서 Browser가 이해할 수 있는 평범한 일반 HTML로 만든다
//  Component는 대문자 시작
//  props는 뭐든지 component에 넣게 되는 것들 -> props는 argument로 간다
<Food favourite="kimchi" />
<Food favourite="ramen" />
<Food favourite="samgiopsal" />
<Food favourite="chukumi" />

npm -i prop-types
-> 내가 전달받은 props가 내가 원하는 props인지를 확인

functiond component
function App() {
  return (
    <section class="container">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </section class="container">
  );
}
*/

//  class App -> React Component
//  React.class.Componet -> class App 확장
//  Function component는 function이고 뭔가를 return -> screen 표시
//  class component는 class 하지만 react component로 부터 확장되고 screen에 표시
//  react는 자동적으로 모든 class component의 render method를 실행하고자 한다
//  바꿀 데이터를 state안으로 ㄱㄱ 
//  state를 직접 변경하지 마라!
//  setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출
//  state를 직접 변경한다고 해서 render function이 refresh 되지 않느다 그래서 변경안된다
//  lift cycle method => react가 component를 생성하는 그리고 없애는 방법

/*
Mounting
컴포넌트의 탄생
constructor : 컴포넌트가 생성될 떄
render()
componentDidMount : 컴포넌트가 최초에 생성 된 후

Updating
컴포넌트의 업데이트
setState
render()
componentDidUpdate : setState 이후에

Unmounting
컴포넌트가 죽는 것. 언제? 페이지를 바꿀 때 등등 다양한 경우가 있다.
componentWillUnmount : 컴포넌트의 수명이 끝날 때 , 대표적으로 리프레쉬, 페이지 전환

class App extends React.Component {
  state = {
    count: 0
  };
  add= () => {
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  };

  render() {
    return <section class="container">
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </section class="container">
  }
}

//https://yts.mx/

import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    //movies.data.data.movies
    const { data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?srot_by=rating");
    this.setState( { movies, isLoading: false } )
    //console.log(movies);
  }
  componentDidMount() {
    
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000);
    
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
          </div>
          )}
      </section>
    );
  }
}

 */

import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}


export default Home;
