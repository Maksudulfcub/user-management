import User from "../User/User";

const Users = ({ users }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {users.map(user => <User key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;