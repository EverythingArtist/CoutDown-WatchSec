
import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      seconds: 60
    }
  }

  componentDidMount() {
    setInterval(this.timer.bind(this), 1000);
  }

  timer() {
    if (this.state.seconds) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }));
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({seconds: this.textInput.value});
  }

  renderClock() {
    if (this.state.seconds > 0) {
      return (<div className = 'App-title'>{this.state.seconds} Seconds</div>);
    } else if (this.state.seconds === 0) {
      return (<div className = 'App-title'>Done!</div>);
    }
  }

  render() {
    return (
      <div className="App">
      CountDown starts:  {this.renderClock()}

        <form>
          <input
            className='Deadline-input'
            placeholder='Enter Seconds'
            ref={input => this.textInput = input}
            type='text'>
          </input>
          <button onClick={event => this.handleClick(event)}>Submit</button>
            <div className='App-title1'>Default time is 60 sec. Enter your seconds to start.</div>
        </form>
      </div>
    );
  }
}

export default App;

