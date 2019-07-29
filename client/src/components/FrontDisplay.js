import React from 'react';
import fortnite from '../images/marshmello.jpg';

const displayNew = () => {
    return (
        <div>
            <h4>Recent</h4>
            <div className="itemCard">
                <img className="cardImg" src={fortnite} alt="Fornite" width="400px"></img>
                <h4 className="card-title">Title</h4>
                <p className="card-text">Description</p>
            </div>
            <div className="itemCard">
                <img className="cardImg" src={fortnite} alt="Fornite" width="400px"></img>
                <h4 className="card-title">Title</h4>
                <p className="card-text">Description</p>
            </div>
            <div className="itemCard">
                <img className="cardImg" src={fortnite} alt="Fornite" width="400px"></img>
                <h4 className="card-title">Title</h4>
                <p className="card-text">Description</p>
            </div>
        </div>
    )
}

export default displayNew;