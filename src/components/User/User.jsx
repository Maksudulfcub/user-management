import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const User = ({ user }) => {
    const { id, username } = user;

    const { users, setUsers } = useContext(UsersContext);

    const handleDelete = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

    return (
        <div>
            <div className="card lg:w-96 mt-10 bg-amber-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Name : {username}</h2>
                    <p>User ID : {id}</p>
                    <div className="justify-end card-actions">
                        <button onClick={() => { handleDelete(id) }} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;