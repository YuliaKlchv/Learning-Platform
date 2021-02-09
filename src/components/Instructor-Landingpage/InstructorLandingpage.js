import React from 'react';
import Upload from './Upload';
import Upload2 from './Upload2';
import ShowRating from './ShowRating';
import MyVideos from './MyVideos';
import './InstructorLandingpage.css';
import moment from 'moment';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';

function InstructorLandingpage(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const date = moment().format("HH");
    const daytime = (date) => {
        if (date >= 5 && date < 12) {
            return ("Good Morning ");
        } else if (date >= 12 && date < 17) {
            return ("Welcome back ");
        } else if (date >= 17 || date < 5) {
            return ("Good evening ");
        };
    };
    

    return (

        <div className="Instr">
             <Jumbotron fluid>
                {/* <h1>{daytime(date)} {props.applicationState.user.firstName}</h1> */}
            </Jumbotron>

            <Container>
                <Row>
                    <Col>
                        <ShowRating/>
                    </Col>
                    <Col>
                        <MyVideos/>
                    </Col>
                </Row>
            </Container>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Upload
                </Button>

            <Upload
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* <Upload2
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}

        </div>
    )
}

export default InstructorLandingpage;