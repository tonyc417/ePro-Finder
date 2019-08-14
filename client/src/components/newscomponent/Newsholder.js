import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  

const newsArticle = ({title, img, author, description, key}) => {
    return(
        <div key={key} >
            <Card className="mt-2 itemCard">
                <img src={img} alt="A image" width="250px" />
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