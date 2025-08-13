import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";

const NewUser = () => {

    const [userName, setUsername] = useState("");
    const { setUsers } = useContext(UsersContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { id: new Date().getTime().toString(), username: userName };
        setUsers(prevUsers => [...prevUsers, newUser]);
        setUsername("");
    }

    return (
        <div>
            <div className="card card-border bg-base-100 lg:w-96">
                <div className="card-body">
                    <h2 className="card-title">Create a New User</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="User name" className="input input-primary" value={userName} onChange={handleUsernameChange} />
                        <div className="card-actions mt-2">
                            <button type="submit" className="btn btn-primary">Create User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewUser;