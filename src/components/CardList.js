import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
    return (
        <div className="flex flex-wrap">
            {
                robots.map((user, id) => {
                    return (
                        <Card
                            key={id}
                            id={robots[id].id}
                            name={robots[id].name}
                            email={robots[id].email} />
                    )
                })
            }
        </div>
    );
}

export default CardList; 