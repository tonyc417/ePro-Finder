import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Posts extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Tony'},
            { id: uuid(), name: 'Jose'},
            { id: uuid(), name: 'Alex'},
            { id: uuid(), name: 'Amy'},            
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '1rem'}}
                    onClick={() => {
                        const name = prompt("Enter description");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name}]
                            }));
                        }
                    }}
                >New Post</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id,name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                    className="remove-btn" 
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state =>({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default Posts;