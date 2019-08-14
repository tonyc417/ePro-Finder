import React, { Component } from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostModal from './PostModal';
import Avatar from '../images/avatar.jpg';
import Person from './NewPost';

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
        const postList = items.map(person => <Person person={person} />)
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
                                        <li>Games</li>
                                        <li>My Profile</li>
                                        <li>Find Clan</li>
                                    </ul>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Card className='itemCard'>
                    <CardBody>
                        <img src={Avatar} alt='User profile image' width='100px' />
                        <CardTitle>Tony Cruz</CardTitle>
                        <CardText>Platform:</CardText>
                    </CardBody>
                </Card>
                <Container>
                        <h4>Home</h4>
                        <PostModal />
                        {postList}
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