import { useEffect } from "react";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent class constructor");

    this.state = {
      count: 0,
      yes: true,
    };
  }
  componentDidMount() {
    console.log("Parent did mount");
    this.setState({ count: this.state.count + 1 });
    // API call
  }
  componentDidUpdate() {
    console.log("Parent did update");
    if (this.state.count === 1 && this.state.yes) {
      this.setState({ yes: false });
    }
  }
  componentWillUnmount() {
    console.log("Parent will unmount");
  }
  render() {
    console.log("Parent class Render");
    return (
      <div>
        About
        {/* <UserClass name={this.state.count} /> */}
        {/* <UserClass name="2" /> */}
        {/* <UserClass name="3" /> */}
        <UserFunction name="kd" />
      </div>
    );
  }
}

export default About;
