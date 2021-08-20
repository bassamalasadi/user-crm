import React, {useState, useEffect} from 'react'
import {Container, Row, } from 'react-bootstrap';
import User from './User'
import {
    HashRouter as Router,
    Route,
    Link,
  } from "react-router-dom";

import UserDetail from './UserDetail'
const ListUsers = () => {
    const [data, setData] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            <Container fluid className="p-1 m-5">
                <Row>
                <Router basename={process.env.PUBLIC_URL}>
                    {
                        data && data.length>0 && data.map(user => (
                            <div className="d-table-row px-3">
                                <Route exact path="/">
                                    <Link to={`/${user.id}`} style={{ textDecoration: 'none', color:'#29406e' }}>
                                        <User props={user} />
                                    </Link>
                                </Route>
                                <Route path={`/${user.id}`}>
                                    <UserDetail props={user} />
                                </Route>
                            </div>
                        ))
                    }   
                </Router>
            </Row>
        </Container>
        </div>              
    )
}

export default ListUsers