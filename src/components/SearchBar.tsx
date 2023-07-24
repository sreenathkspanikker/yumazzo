import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListItems from './ListItems';
import { ReactComponent as SearchIcon } from '../assets/images/Search.svg';
import { ListItem } from '../utils/types';

interface SearchBarProps {
  handleItemClick: (item: ListItem) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleItemClick }) => {
  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listItemsData = useSelector((state: any) => state.add.listItems); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    // Reset the input value when isInputFocused becomes false (input is blurred)
    const timeoutId = setTimeout(() => {
      if (!isInputFocused && inputRef.current) {
        inputRef.current.value = '';
        setSearchText('');
      }
    }, 500);

    // Clear the timeout when the component is unmounted or when isInputFocused changes
    return () => clearTimeout(timeoutId);
  }, [isInputFocused]);

  // Example list of items
  const allListItems: ListItem[] = listItemsData;

  // Filter the list items based on the searchText
  const listItems: ListItem[] = allListItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='search-container'>
      <div className={`form-search ${isInputFocused ? 'focused' : ''}`}>
        <SearchIcon />
        <input
          ref={inputRef}
          type="text"
          className='input-search'
          placeholder="Search cuisine"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      {searchText !== '' && listItems.length > 0 && (
        <ListItems listItems={listItems} handleItemClick={handleItemClick} />
      )}
    </div>
  );
};

export default SearchBar;
