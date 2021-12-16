import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className='rank'>
            <div className='text white f3'>
                {`${name} , your current entry rank is...`}
            </div>
            <div className='text white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;