import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, token: "" });

    ///axios deafult
    axios.defaults.headers.common["Authorization"] = auth?.token;

    //defaults
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parse = JSON.parse(data);
            setAuth({
                ...auth,
                user: parse.user,
                token: parse.token,
            });
        }
        //eslint-disable-next-line
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };