import React from 'react';

const ListItems = ({ listItems }) => {
  return (
    <ul className="list-items">
      {listItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ListItems;
