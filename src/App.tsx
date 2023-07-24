import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './store/appSlice';
import SearchBar from './components/SearchBar';
import DetailedItems from './components/DetailedItems';
import { ListItem } from './utils/types';
import RecipeForm from './components/RecipeForm';

const App: React.FC = () => {
  const [isRecipe, setRecipe] = useState(false);
  const dispatch = useDispatch();
  const selectedItemDetails = useSelector((state: any) => state.app.selectedItem);
  const listItemsData = useSelector((state: any) => state.add.listItems); 
   
  useEffect(() => {
    // Dispatch the setSelectedItem action with the first item from listItemsData in the Redux store
    if (listItemsData.length > 0) {
      dispatch(addItem(listItemsData[0]));
    }
  }, [dispatch, listItemsData]);

  const handleItemClick = (item: ListItem) => {
    dispatch(addItem(item));
  };

  const handleAddRecipeClick = () => {
    setRecipe((prevRecipe) => !prevRecipe);
  };

  return (
    <div className='app-wrapper'>
      <div className='app-container'>
        {isRecipe ? (
          <RecipeForm onBackButtonClick={handleAddRecipeClick} />
        ) : (
          <>
            {/* Render the SearchBar component */}
            <SearchBar handleItemClick={handleItemClick} />

            {/* Render the DetailedItems component and pass selectedItemDetails as props */}
            <DetailedItems selectedItemDetails={selectedItemDetails} onAddRecipeClick={handleAddRecipeClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
