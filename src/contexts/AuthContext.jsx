import { createContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
    user: null,
    isAuthenticated: false,
    isAdmin: false
}

function reducer(state, action) {
    switch(action.type) {
        case 'login': {
            return {
                ...state,
                user: {email: action.payload.email, password: action.payload.password},
                isAuthenticated: true,
                isAdmin: action.payload.isAdmin
            }
        }
        default: {
            return state;
        }
    }
}

function AuthProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState); 
    const {user, isAuthenticated, isAdmin} = state;

    return <AuthContext.Provider value={}>
        {children}
    </AuthContext.Provider>
}