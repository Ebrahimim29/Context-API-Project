import { useContext, useState } from "react";
import UserItem from "./UserItem";
import { UserContext } from "./context";
import UserAdd from "./UserAdd";
import PermissionRP from "./PermissionRP";

const UsersList = () => {

    const {users} = useContext(UserContext)

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="bg-amber-300 shadow overflow-hidden sm:rounded-md">
            <h1 className="px-4 py-2 sm:px-6 text-lg leading-6 font-medium text-gray-900">لیست کاربران</h1>
            <div className="flex justify-end p-5">
                <PermissionRP render={(name) => (
                    <button className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowModal(true)}>
                        {name}
                    </button>
                )}/>                
                {showModal && <UserAdd setShowModal={setShowModal}/>}
            </div>
            <ul className="border-t border-gray-400 divide-y divide-gray-900 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {users.map((user) => (
                    <li key={user.id} className="px-4 py-4 sm:px-6">
                        <UserItem user={user}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UsersList;