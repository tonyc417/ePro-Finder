import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Twitter from '../images/twitterIcon.png'

import {Container, Row, Col, Media} from 'reactstrap';

class UserProfile extends Component {
    state = {

    };

    static propTypes = {
      auth: PropTypes.object.isRequired  
    };

    render() {
        const { user } = this.props.auth;
        console.log(user);
        return(
            <div>
                <Navbar />
                <Container className="userProfile mt-3">
                    <Media>
                        <Media body>
                            <Media heading>
                                <h1>{user ? `${user.name}`: ''}</h1>
                                <img src={Twitter} alt="A twitter icon" width="30px" />
                            </Media>
                                <h4>Date Joined: {user ? `${user.register_date}` : ''} </h4>
                        </Media>
                    </Media>
                {/* <h1>{user ? `${user.name}`: ''}</h1>
                <p>Date Joined: {user ? `${user.register_date}` : ''} </p>
                <Row>
                    <Col>
                        <h4>Platform</h4>
                        <h3>Games</h3>
                    </Col>
                </Row> */}
                </Container>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(UserProfile);