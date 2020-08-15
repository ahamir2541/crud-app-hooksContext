import React, {useContext, useState} from 'react';
import { v4 as uuid} from 'uuid' ;
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const AddUser = ({history}) => {
    const { addUser } = useContext(GlobalContext)

    const [name, setName] = useState('')

    const addName = {
        id : uuid() ,
        name : name
    }

    const submitHandler = (e) => {
        e.preventDefault()

        addUser(addName)
        history.push('/')
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} >
                <h6>Name</h6>
                <input value={name} onChange={e => setName(e.target.value) } className="form-control mb-3" type="text" placeholder="Enter Name" />
                <button className="btn btn-primary mr-4" >Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        </div>
    );
};

export default AddUser;