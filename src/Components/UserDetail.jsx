import React from 'react'
import {Container , Button} from 'react-bootstrap';
import {
    Link,
  } from "react-router-dom";
const UserDetail = (props) => {
    let data = props.props
    let address = data.address
    let company =data.company
    return(
        <Container fluid >

            <div className="UserProfile">
                <h1 className="username">{data.name}</h1>
                <br /><br />
                <Link to="/"><Button className="float-right px-5 py-2 bg-white text-dark rounded-pill">Back</Button></Link>
                <br /><br /><br />
                <div className="row p-5 m-5">
                        <div className="col-md-4">
                            <div className="">
                                <h2 className="pb-3">Info</h2>
                                <p><b>UserName : </b> {data.username}</p>
                                <p><b>Phone    : </b> {data.phone.slice(0, 13)}</p>
                                <p><b>Website  : </b> {data.website}</p>
                                <p><b>email    : </b> {data.email}</p>
                            </div>
                        </div>
                            
                        <div className="col-md-4">
                            <div className="">
                                <h2 className="pb-3">Address</h2>
                                <p><b>City    : </b> {address.city}</p>
                                <p><b>Street  : </b> {address.street}</p>
                                <p><b>Suite   : </b> {address.suite}</p>
                                <p><b>Zipcode : </b> {address.zipcode}</p>
                            </div>
                        </div>
                        <div className="col-md-4">               
                            <div className="">
                                <h2 className="pb-3">Company</h2>
                                <p><b>Name        : </b> {company.bs}</p>
                                <p><b>Description : </b> {company.catchPhrase}</p>
                                <p><b>Business    : </b> {company.bs}</p>
                            </div>
                        </div>
                    </div>
            </div>

      </Container>
    )
}

export default UserDetail
