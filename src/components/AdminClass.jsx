import React from "react";
class AdminClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Sub Child Class contructor", this.props.name);
  }
  componentDidMount() {
    console.log("Sub Child did mount", this.props.name);
  }
  componentDidUpdate() {
    console.log("Sub Child did update", this.props.name);
  }
  componentWillUnmount() {
    console.log("Sub Child will unmount");
  }
  render() {
    console.log("Sub Child class render", this.props.name);

    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
export default AdminClass;
