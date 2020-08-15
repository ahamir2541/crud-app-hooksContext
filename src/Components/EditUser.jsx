import React, {useContext, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const EditUser = (props) => {
    const {users, editUser } = useContext(GlobalContext)

    const [selectedUser, setSelectedUser] = useState({
        id : '',
        name : ''
    })

    let history = useHistory()
    let currentUserId = props.match.params.id 

    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const submitHandler = e => {
        e.preventDefault()

        history.push('/')
        editUser(selectedUser)
    }

    const changeHandler = e => {
        setSelectedUser({...selectedUser, [e.target.name] : e.target.value })
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} >
             <h6>Name</h6>
                <input name="name" value={selectedUser.name} onChange={changeHandler} className="form-control mb-3" type="text" placeholder="Enter Name" />
                <button className="btn btn-primary mr-4" >Edit name</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        </div>
    );
};

export default EditUser;