import { useState } from 'react';
import Users from '../Users/Users';
import NewUser from '../NewUser/NewUser';
import { UsersContext } from '../context/UsersContext';

const Home = () => {

    const [users, setUsers] = useState([
        { id: 1, username: "Bond" },
        { id: 2, username: "Benjamin" },
        { id: 3, username: "Edward" },
        { id: 4, username: "David" },
        { id: 5, username: "Oliver" },
        { id: 6, username: "Andrew" },
        { id: 7, username: "Harry" },
        { id: 8, username: "Thomas" },
        { id: 9, username: "Jack" },
        { id: 10, username: "William" },
    ])

    const handleDeleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

    const handleAddNewUser = (newUser) => {
        setUsers(prevUsers => [...prevUsers, newUser]);
    }

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            <div className='px-10 mt-5 mb-10'>
                <h1 className='text-center text-5xl font-semibold'>Welcome to UserHub</h1>
                <NewUser handleAddNewUser={handleAddNewUser}></NewUser>
                <Users handleDeleteUser={handleDeleteUser}></Users>
            </div>
        </UsersContext.Provider>
    );
};

export default Home;