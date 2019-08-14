import React from 'react';
import { Card, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Person = ({name, date}) => {
    return(
        <div>
            <Card className="mt-3 feedCard">
                <CardBody>
                    <CardTitle className="feedText">
                        {name}
                    </CardTitle>
                    <CardSubtitle>
                        Posted on: {date}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
};

export default Person;