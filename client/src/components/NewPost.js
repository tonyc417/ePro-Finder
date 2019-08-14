import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Person = ({person}) => {
    console.log(person._id)
    return(
        <div>
            <Card className="mt-3 feedCard">
                <CardBody>
                    <CardTitle className="feedText">
                        {person.name}
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
};

export default Person;