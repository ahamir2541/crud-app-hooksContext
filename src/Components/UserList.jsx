import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext)

    return (
        <div className="userList">
            <ul>
                {users.map(user => (
                    <li key={user.id} className="listItem ">
                        <div className="container d-flex justify-content-between">
                            <div className="userText"> {user.name} </div>
                            <div className="editDelete">
                                <Link to={`/edit/${user.id}`} className="btn btn-info mr-2" >Edit</Link>
                                <button onClick={() => removeUser(user.id) } className="btn btn-danger" >Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;