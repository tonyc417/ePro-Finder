import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterUser';
import Login from './auth/Login';
import Logout from './auth/Logout';
import gameSplash from '../images/gamingfront.jpg';

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
            <div>
                <ul className="nav-links">
                    <li>
                        {user ? `Welcome ${user.name}` : ''}
                    </li>
                    <Link to="/games">
                        <li>Games</li>
                    </Link>
                    <Link to="/profile">
                        <li>My Profile</li>
                    </Link>
                    <Logout />
                </ul>
            </div>
        );

        const guest = (
            <div>
                <ul className="nav-links">
                    <Link to="/games">
                        <li>Games</li>
                    </Link>
                    <Link to="/clans">
                        <li>Find Clan</li>
                    </Link>
                    <RegisterModal />
                    <Login />
                </ul>
            </div>
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
                        <div className="animated-text">
                            <Row>
                                <div className="frontText">Your one stop for</div>
                                <Col className="mt-5 frontText">
                                <div className="line">
                                        Gaming
                                </div>
                                    <div className="line">
                                        Hightlights
                                </div>
                                <div className="line">
                                        Clans
                                </div>
                                <div className="line">
                                        News
                                </div>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <Link to="/home">
                                    <Button className="frontBtn mt-5">Start</Button>
                                </Link>
                            </Col>
                            <Col className="mt-5">
                                <img src={gameSplash} alt="An ESports event" width="500px"></img>
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