import React, { Component } from 'react';
import {
    Container, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostModal from './PostModal';

class Posts extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                <div className="controls">
                    <div className="sidebar">
                        <nav className="sidebar-nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <p className="nav-link active" href="#">
                                        Welcome, Tony
                                    </p>
                                </li>
                                <Link to="/">
                                <li className="nav-item">
                                    <p className="nav-link" href="#">
                                        Home
                                     </p>
                                </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Container>
                        <h4>Home</h4>
                        <PostModal />
                        <Card className="itemCard mb-5">
                        <TransitionGroup className="shopping-list">
                            {items.map(({ _id, name, summary }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <CardTitle>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >&times;</Button>
                                        <h2 className="card-title">{name}</h2> <h4 className="card-text">{summary}</h4>
                                    </CardTitle>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </Card>
                    </Container>
                    </div>
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(Posts);