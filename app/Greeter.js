// Greeter.js
// 第一种
// module.exports = function() {
//   var greet = document.createElement("div");
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };

// 第二个
// var config = require("./config.json");

// module.exports = function() {
//   var greet = document.createElement("div");
//   greet.textContent = config.greetText;
//   return greet;
// };

import React, { Component } from "react";
import config from "./config.json";
import styles from "./Greeter.less"; //导入

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <span>oooooooooooo</span>
      </div>
    );
  }
}

export default Greeter;
