import { useContext } from "react";
import User from "../User/User";
import { UsersContext } from "../context/UsersContext";

const Users = ({ handleDeleteUser }) => {

    const { users } = useContext(UsersContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {users.map(user => <User handleDeleteUser={handleDeleteUser} key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;