import React from 'react';

const ListItem = () => {
    return (
        <li className="list-item">
            <input type="checkbox" name="item" id="item" />
            <label htmlFor="item">Make app</label>
        </li>
    );
};

export default ListItem;
