import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
//import bootstrap from 'bootstrap';
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState({ blogs: [] });
    useEffect(() => {
        fetch("http://127.0.0.1:8000/attendance/showemp")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers({ blogs: data });
                    console.log(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Mobileno</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.blogs && users.blogs.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.address}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </ReactBootStrap.Table>
              
            </>
        );
    }
}
export default Home;