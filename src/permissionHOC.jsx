import { useContext } from "react";
import { UserContext } from "./context";

export const permissionHOC = (WrappedComponent) => {
    
    const PermissionWrapper = (props) => {
        const {hasPermission} = useContext(UserContext);
        return hasPermission ? <WrappedComponent {...props} /> : null;
    }

    PermissionWrapper.displayName = `permissionHOC(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    
    return PermissionWrapper;
}