import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='br3 pa2 tc bg-light-green be3 pa3 ma2 grow bw2 shadow-5 '>
            <img src={`https://robohash.org/${id}?size=200x200`} alt=''/>
            <div>
                <h2 className="w5">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;