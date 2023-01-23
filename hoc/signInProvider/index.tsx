import { useReducer, createContext } from "react";

import { ILayoutTypes } from "../../app/layout.types";
import { ISignInContext } from "./signInProvider.types";

export const SignInContext = createContext<any>({});

const signInReducer = (
  state: ISignInContext,
  action: { type: string; data: ISignInContext }
) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESSFUL":
      return action.data;
    default:
      return state;
  }
};

export const SignInProvider = ({ children }: ILayoutTypes) => {
  const [state, setState] = useReducer(signInReducer, { isSignedIn: false });

  const value = {
    signInData: state,
    onSignIn: () => {
      setState({ type: "SIGN_IN_SUCCESSFUL", data: { isSignedIn: true } });
    },
  };

  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};
