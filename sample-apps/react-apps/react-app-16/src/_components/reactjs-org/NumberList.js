import React from 'react';

import "./NumberList.css";

class NumberList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );

        return (
            <ul className="NumberList">{listItems}</ul>
        );
    }
}

export default NumberList;