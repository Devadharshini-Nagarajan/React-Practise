import { createContext } from "react";

const UserContext = createContext({ userName: "default" });
console.log(UserContext)
export default UserContext;
