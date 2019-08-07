import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterUser';
import Login from './auth/Login';
import Logout from './auth/Logout';

class Front extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { user, isAuthenticated } = this.props.auth;

        const userLinks = (
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        const guest = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <Login />
                </NavItem>
                <NavItem>
                    Games
                </NavItem>
            </Fragment>
        );

        return (
            <section className="hero-image">
                <div>
                    <Navbar dark expand='sm' className='mb-5 customNav'>
                        <Container>
                            <NavbarBrand href='/'>ePro-Connect</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className='ml-auto' navbar>
                                    {isAuthenticated ? userLinks : guest}
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                    <Container>
                    <Row>
                        <Col className="frontText mt-5">Welcome</Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button className="frontBtn mt-5">Start</Button>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Front);