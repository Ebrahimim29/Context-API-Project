import { createContext } from "react";

export const UserContext = createContext({
    // مقادیر پیش فرض (Values)
    users: [],
    setUsers: () =>{},
    addUser: () =>{},
    deleteUser: () =>{},
    hasPermission: false,
    setHasPermission: () => {},
});


