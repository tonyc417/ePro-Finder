import React, { Component } from 'react';
import {
    Container, Card, CardText, CardBody,
    CardTitle, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Row, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostModal from './PostModal';
import Avatar from '../images/avatar.jpg';
import NewPost from './NewPost';
import News from './newscomponent/News';

class Posts extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }


    render() {
        const { user } = this.props.auth;
        const { items } = this.props.item;
        return (
            <div>
                <div>
                    <Navbar dark expand='sm' className='mb-5 customNav'>
                        <Container>
                            <NavbarBrand href='/'>ePro-Connect</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className='ml-auto' navbar>
                                    <ul className='nav-links'>
                                        <Link to="/games">
                                            <li>Games</li>
                                        </Link>
                                        <Link to='/profile'>
                                            <li>My Profile</li>
                                        </Link>
                                        <Link to="clans">
                                            <li>Find Clan</li>
                                        </Link>
                                    </ul>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Card className='itemCard'>
                    <CardBody>
                        <img src={Avatar} alt='User profile icon' width='100px' />
                        <CardTitle className="text-white">{user ? `Welcome, ${user.name}` : ''}</CardTitle>
                        <CardText>Platform:</CardText>
                    </CardBody>
                </Card>
                <Container>
                    <Row>
                        <Col>
                            <h4>Home</h4>
                            <PostModal />
                            {items.map(item => (
                                <NewPost
                                    key={item._id}
                                    name={item.name}
                                    date={item.date}
                                />
                            ))}
                        </Col>
                        <Col>
                            <h4>News</h4>
                            <News />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Posts.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    auth: state.auth
});

export default connect(mapStateToProps, { getItems, deleteItem })(Posts);