import { useState, type JSX, type ReactNode } from "react";
import { UserContext } from "../context/UserContext";
import type { UserContextType } from "../types/user";

function UserProvider({children}: {children: ReactNode}): JSX.Element {
    
    const [username] =  useState<UserContextType>(new UserContext"Jorge Luna");

    return <UserContext.Provider value={username}></UserContext.Provider>

}

export default UserProvider;