import React from "react";
import 'tachyons';

//const Card = (props) => {
const Card = ({ name, email, id }) => {
    //const { name, email, id } = props
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?set=set3`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
