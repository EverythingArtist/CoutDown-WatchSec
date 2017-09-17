import React, {Component} from 'react';
import './App.css';
import './App';

class Clock extends Component{
constructor(props){
  super(props);
  this.state = {
    seconds: 0,
  }
  console.log('this.props',this.props);
}

//
componentWillMount(){
  this.timer(this.props.time);
}

componentDidMount(){
  setInterval(()=> this.timer(this.props.time),1000);
}


timer(time){
  console.log('time in timer', time)
  let count = 0;
time = time - setInterval(count++);
  this.setState({seconds: time});
}


  render(){

    return (
      <div>
      <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export default Clock;
