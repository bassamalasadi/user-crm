import React from 'react'
import {Card} from 'react-bootstrap/';
const User = (props) => {
    let data = props.props
    return(
            <div className="d-flex m-4 justify-content-center">
                <Card style={{ width: '18rem', backgroundColor:"#fcfcfc" , borderRadius:'30px'}}>
                    <Card.Body>
                        <div className="avatar">
                            <div className="avatar-l">
                                {data.name[0]}
                            </div>
                        </div>
                        <br/>
                        <Card.Title className="m-2 float-center"><h5>{data.name}</h5></Card.Title>
                        <Card.Text className="py-3">
                            <div><b>Phone:</b> <span className="float-right">{data.phone.slice(0, 13)}</span></div>
                            <div><b>Email:</b> <span className="float-right">{data.email}</span></div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div> 
    )
}

export default User