import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      time: '60',
      newTime: ''
    }
  }

  changeTime(){
    this.setState({time: this.state.newTime});
  }


  render(){
    return (
      <div className="App">
        <div className = "App-title">
          Countdown to {this.state.time}
        </div>

        <Clock
         time={this.state.time}
          />

        <Form inline >
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newTime: event.target.value})}
            />
          <Button onClick={() => this.changeTime()}>
            Submit
          </Button>
        </Form>

      </div>
    )
  }
}

export default App;
