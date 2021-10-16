import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.global.css';
import Counter from './containers/Counter';

const Home = () => {
  return (
    <div>
      <div className="Home">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <Counter />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
