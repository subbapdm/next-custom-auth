"use client"

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, initialUser }) => {
    const [user, setUser] = useState(initialUser);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUser must be used within UserProvider");
    }
    return context;
}

