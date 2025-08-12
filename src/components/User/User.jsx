
const User = ({ user }) => {
    return (
        <div>
            <div className="card lg:w-96 mt-10 bg-amber-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Name : {user.username}</h2>
                    <p>User ID : {user.id}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;