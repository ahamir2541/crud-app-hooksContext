import React from 'react';
import { Link } from 'react-router-dom'

const Heading = () => {
    return (
        <div className="Navbar text-light bg-dark p-2">
            <div className="container d-flex justify-content-between">
                <div className="Navbar-brand">My team</div>
                <div className="Nav-item">
                    <Link to="/add" className="btn btn-primary" >Add user</Link>
                </div>
            </div>
        </div>
    );
};

export default Heading;