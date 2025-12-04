import { useState } from "react";
import { UserContext } from "./context";

const initialUsers = [
  {id:1 ,name:"حسین حسینی" ,email:"hossein@hosseini.com"},
  {id:2 ,name:"حسن کریمی" ,email:"hassan@karimi.com"},
  {id:3 ,name:"سارا نیازی" ,email:"sara@niazi.com"},
  {id:4 ,name:"رشید محمدی" ,email:"rashid@mohammadi.com"},
  {id:5 ,name:"جمیل ایرجی" ,email:"jamil@iraji.com"},
  {id:6 ,name:"محمد درفشی" ,email:"mohammad@derafshi.com"},
  {id:7 ,name:"هادی ابراهیمی" ,email:"hadi@ebrahimi.com"},
  {id:8 ,name:"حنانه کیایی" ,email:"hananeh@kiaei.com"},
]

const UserContextProvider = ({children}) => {

    const [hasPermission, setHasPermission] = useState(true);
    const [users, setUsers] = useState(initialUsers);
    
    const addUser = (user) => {
        setUsers([...users,user]);
    }
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    }

    return (
        <UserContext.Provider value={{users, setUsers, addUser, deleteUser, hasPermission, setHasPermission}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
