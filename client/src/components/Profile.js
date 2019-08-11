import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';

class UserProfile extends Component {
    state = {

    };

    static propTypes = {
      auth: PropTypes.object.isRequired  
    };

    render() {
        const { user, isAuthenticated } = this.props.auth;
        console.log(user);
        return(
            <div>
                <Container>
                <h1>{user ? `${user.name}`: ''}</h1>
                <p>Date Joined:</p>
                <Row>
                    <Col>
                        <h4>Platform:</h4>
                        <h3>Games</h3>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(UserProfile);