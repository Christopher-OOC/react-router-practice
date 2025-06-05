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
      const value = {
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        error: "",
      };

      console.log(value);

      localStorage.setItem("authObject", JSON.stringify(value));

      return {
        ...state,
        ...value,
      };
    }
    case "invalid": {
      return {
        ...state,
        error: "Invalid username or password!",
      };
    }
    case "logout": {
      localStorage.setItem("authObject", JSON.stringify(initialState));
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
  let { user, isAuthenticated, isAdmin, error } = state;
  console.log(localStorage.getItem("authObject"));
  const authObject = JSON.parse(
    localStorage.getItem("authObject")
      ? localStorage.getItem("authObject")
      : null
  );

  if (authObject) {
    user = authObject.user;
    isAuthenticated = authObject.isAuthenticated;
    isAdmin = authObject.isAdmin;
  }

  console.log(authObject);

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
