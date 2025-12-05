import { useContext } from "react"
import { UserContext } from "./UserContext"

const PermissionRP = ({render}) => {

    const {hasPermission} = useContext(UserContext)
    return (
        <div>
            {hasPermission && render("Mohammad")}
        </div>
    );

};

export default PermissionRP;