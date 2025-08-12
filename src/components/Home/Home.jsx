import { useState } from 'react';
import Users from '../Users/Users';

const Home = () => {

    const [users, setUsers] = useState([
        { id: 1, username: "Bond" },
        { id: 2, username: "Abram" },
        { id: 3, username: "JKL" },
        { id: 4, username: "David" },
        { id: 5, username: "Lopez" },
        { id: 6, username: "Andrew" },
        { id: 7, username: "Lamu" },
    ])

    const handleDeleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

    return (
        <div className='px-10 mt-5 mb-10'>
            <h1 className='text-center text-5xl font-semibold'>Welcome to UserHub</h1>
            <Users users={users} handleDeleteUser={handleDeleteUser}></Users>
        </div>
    );
};

export default Home;