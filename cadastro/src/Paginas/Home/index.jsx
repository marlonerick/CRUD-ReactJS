import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';

const Home = () => {
    return (
        <div>
            <NavBar />

            <MDBContainer>

                <MDBRow className='d-flex justify-content-md-center'>
                    <MDBCol lg='8' className='my-5'>
                        <MDBCard>
                            <MDBCardBody >
                                <h1 className="d-flex justify-content-around">Voce esta na Home.</h1>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div >
    )
}

export default Home;