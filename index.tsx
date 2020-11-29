import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import HeartButton from "./Button";

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React - like button'
    };
  }

  render() {
    return (
      <div>
      <h1>{this.state.name}</h1>
      <HeartButton />
      <HeartButton />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
