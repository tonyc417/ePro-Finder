import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import fortnite from '../images/marshmello.jpg';

const Person = ({person}) => {
    console.log(person._id)
    return(
        <div>
            <Card className="mt-3 feedCard">
                <CardBody>
                    <CardTitle className="feedText">
                        {person.name}
                    </CardTitle>
                    <CardSubtitle>
                        Posted on: {person.date}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
};

export default Person;