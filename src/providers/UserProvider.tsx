import { useState, type JSX, type ReactNode } from "react";
import { UserContext } from "../context/UserContext";

function UserProvider({children}: {children: ReactNode}): JSX.Element {
    
    const [username] =  useState("Jorge Luna");

    return (
        <UserContext.Provider value={{username}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserProvider;