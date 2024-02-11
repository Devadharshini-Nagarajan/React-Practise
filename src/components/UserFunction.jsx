import { useEffect } from "react";

const UserFunction = (props) => {
  useEffect(() => {
    console.log("Child Function UseEffect", props.name);
    const timer = setInterval(() => {
        console.log("interval")
    }, 2000)
    return (() => {
        clearInterval(timer)
    })
  }, []);
  return <div>UserFunction {console.log("Child fn HTML")}</div>;
};
export default UserFunction;
