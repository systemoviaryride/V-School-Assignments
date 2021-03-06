import React, {Component} from "react";
import Moment from "moment";

export default class MyTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormatted : Moment().locale('fr').format('h:mm A').toString()
    };
  }
  tick = () => {
    this.setState({
      dateFormatted : Moment().locale('fr').format('h:mm A').toString()
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const myTime = this.state.dateFormatted;
    return(
      <div className="myTime">{myTime}</div>
    );
  }
}