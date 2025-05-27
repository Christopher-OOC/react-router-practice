import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
      };
    }
    case "invalid": {
      return {
        ...state,
        error: "Invalid username or password!",
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isAdmin: false,
      };
    }
    default: {
      return state;
    }
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated, isAdmin, error } = state;

  function login(email, password, isAdmin) {
    if (email === password) {
      dispatch({ type: "login", payload: { email, password, isAdmin } });
    } else {
      dispatch({ type: "invalid" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isAdmin, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Cannot access AuthContext outside the context!");
  }

  return context;
}

export { AuthProvider, useAuth };
