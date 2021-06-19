import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

  }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  reset(){
    this.setState({
      counter: 0
    })
  }
  render(){
    return (
      <main>
        <div className="container">
          <h1>Counter</h1>
          <span className={this.state.counter > 0 ? 'text-increment': this.state.counter < 0? 'text-decrement': 'text-reset'}>{this.state.counter}</span>
          <div className="container-buttons">
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.increment}>Increment</button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
