import React from 'react';

// flags
import FlagIndia from '../assets/images/india.svg'
import FlagVitname from '../assets/images/vietnam.svg'
import FlagThailand from '../assets/images/thailand.svg'

// categories
import IconHard from '../assets/images/hard.svg'
import IconEasy from '../assets/images/easy.svg'
import IconMedium from '../assets/images/meedium.svg'

import { ListItem } from '../utils/types';

interface ListItemsProps {
  listItems: ListItem[];
  handleItemClick: (item: ListItem) => void;
}

const ListItems: React.FC<ListItemsProps> = ({ listItems, handleItemClick }) => {
  return (
    <ul className='list-items'>
      {listItems.map((item) => (
        <li key={item.name} onClick={() => handleItemClick(item)} >
          <span className='name'>
            <img
              src={
                item.id === 1
                  ? FlagThailand
                  : item.id === 2
                    ? FlagIndia
                    : item.id === 3
                      ? FlagVitname
                      : FlagIndia 
              }
              alt='flag'
            />
            {item.name}
          </span>
          <span className='category'>
            {item.category === 'Hard' && <img src={IconHard} alt='category' />}
            {item.category === 'Medium' && <img src={IconMedium} alt='category' />}
            {item.category === 'Easy' && <img src={IconEasy} alt='category' />}
            {item.category}
            <i className='duration'>{item.duration}</i>
          </span>

        </li>
      ))}
    </ul>
  );
};

export default ListItems;
