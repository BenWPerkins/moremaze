import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/*
class Supertime extends Component {
  constructor(props) {
    super(props);

    var now = new Date().getTime();
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    this.state = {
      nowz: now,
      countdz: countDownDate,
      minutez: 0,
      secondz: 0,
      microsecondz: 0,
    };
  }

  componentDidMount() {
    var { nowz, countdz, minutez, secondz } = this.state;
    var that = this;
    // Set the date we're counting down to
    // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countdz - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var microseconds = Math.floor((distance % 1000) / 100);

      // Display the result in the element with id="demo"
      //  document.getElementById("demo").innerHTML =
      //    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      that.setState((state) => {
        return {
          minutez: minutes,
          secondz: seconds,
          microsecondz: microseconds,
        };
      });

      // return fancytime;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 50);
  }
  render() {
    var { minutez, secondz, microsecondz } = this.state;

    const fancytime = (
      <div>
        {minutez} :: {secondz} :: {microsecondz}
      </div>
    );
    return <div>{fancytime}</div>;
  }
}*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
