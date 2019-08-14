import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
  

const newsArticle = ({title, img, author, description}) => {
    return(
        <div>
            <Card className="mt-2 itemCard">
                <img src={img} alt="An esports icon" width="250px" />
                <CardBody>
                    <CardTitle className="text-white">{title}</CardTitle>
                    <CardSubtitle>Published by: {author} </CardSubtitle>
                    <CardText>Description: {description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default newsArticle;