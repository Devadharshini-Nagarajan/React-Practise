import { createContext, useReducer } from "react";
const initialState = {
  name: "deva",
};

export const MainContext = createContext(initialState);
const reducer = (state, payload) => {
  switch (payload.type) {
    case "SET_USER": {
        console.log(payload)
      return { ...state, name: payload.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${payload.type}`);
    }
  }
};

const ProjectContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {props.children}
    </MainContext.Provider>
  );
};
export default ProjectContext;
