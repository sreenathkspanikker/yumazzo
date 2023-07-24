import React from 'react';
import { ListItem } from '../utils/types';

// flags
import FlagIndia from '../assets/images/india.svg'
import FlagVitname from '../assets/images/vietnam.svg'
import FlagThailand from '../assets/images/thailand.svg'

// social
import Twitter from '../assets/images/twitter.svg'
import Meedium from '../assets/images/medium.svg'
import Telegram from '../assets/images/telegram.svg'

// dish
import DishMedium from '../assets/images/dishMedium.svg'
import DishHard from '../assets/images/dishHard.svg'

interface DetailedItemsProps {
  selectedItemDetails: ListItem | null;
  onAddRecipeClick: () => void;
}

const DetailedItems: React.FC<DetailedItemsProps> = ({ selectedItemDetails, onAddRecipeClick  }) => {
  if (!selectedItemDetails) {
    return null; 
  }

  // random color generator
  const generateRandomColor = (): string => {
    const hue = Math.floor(Math.random() * 360); 
    const saturation = Math.floor(Math.random() * 25) + 50; 
    const lightness = Math.floor(Math.random() * 25) + 50; 
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <div className='details-wrap'>

      {/* details header */}
      <div className='item-header'>
        <div className='item-header-flag'>
          {selectedItemDetails.id === 1 && <img src={FlagThailand} alt='flag' />}
          {selectedItemDetails.id === 2 && <img src={FlagIndia} alt='flag' />}
          {selectedItemDetails.id === 3 && <img src={FlagVitname} alt='flag' />}
          {selectedItemDetails.name}
        </div>
        <div className='item-header-action'>
          <ul>
            <li><img src={Twitter} alt='social' /></li>
            <li><img src={Telegram} alt='social' /></li>
            <li><img src={Meedium} alt='social' /></li>
          </ul>
          <button className='btn-add-recipe' onClick={onAddRecipeClick} >+ Add recipe</button>
        </div>
      </div>

      {/* details description */}
      <div className='item-description' style={{backgroundColor: generateRandomColor()}}>
        <h2>
          {selectedItemDetails.category === "Hard" && <img src={DishHard} alt='flag' />}
          {selectedItemDetails.category === "Medium" && <img src={DishMedium} alt='flag' />}
          {selectedItemDetails.category === "Easy" && <img src={DishMedium} alt='flag' />}
          Difficulty: {selectedItemDetails.category}
        </h2>
        <p>{selectedItemDetails.details.description}</p>
      </div>

      {/* details description */}
      <div className='item-details'>
        <ul>
          <li>Protein<span>{selectedItemDetails.details.protein}</span></li>
          <li className={selectedItemDetails.details.spiceLevel}>Spice Level<span>{selectedItemDetails.details.spiceLevel}</span></li>
          <li className='active'>Spices<span>{selectedItemDetails.details.spices}</span></li>
          <li className='active'>Cooking Oil<span>{selectedItemDetails.details.cookingOil}</span></li>
          <li>Volume/Weight<span>{selectedItemDetails.details.volumeWeight}</span></li>
          <li>Serves<span>{selectedItemDetails.details.serves}</span></li>
          <li className='active'>Authenticity<span>{selectedItemDetails.details.authenticity}</span></li>
          <li className='active'>Stock<span>{selectedItemDetails.details.stock}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedItems;
