import React from "react";
import AdminClass from "./AdminClass";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Class contructor", this.props.name);
    this.state = {
      count: 0,
      testName: "testName",
      yes: true,
    };
  }
  componentDidMount() {
    console.log("Child did mount", this.props.name);
  }
  componentDidUpdate() {
    console.log("Child did update", this.props.name);
    if (this.props.name === 1 && this.state.yes) {
      this.setState({ testName: "dd", yes: false });
    }
  }
  componentWillUnmount() {
    console.log("Child will unmount");
  }
  render() {
    console.log("Child class render", this.props.name);
    const { name } = this.props;
    const { count, testName } = this.state;
    return (
      <div>
        {this.state.count}
        {this.state.testName}
        <br></br>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment
        </button>
        <span>{name}</span>

        {/* <AdminClass name={this.props.name} /> */}
      </div>
    );
  }
}
export default UserClass;
