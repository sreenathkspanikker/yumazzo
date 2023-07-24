import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import App from '../App';
import SearchBar from '../components/SearchBar';
import DetailedItems from '../components/DetailedItems';
import { addItem } from '../store/appSlice';

// Mock useDispatch and useSelector from 'react-redux'
jest.mock('react-redux');

describe('App Component', () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders SearchBar and DetailedItems components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(SearchBar)).toHaveLength(1);
    expect(wrapper.find(DetailedItems)).toHaveLength(1);
  });

  it('should update the selectedItemDetails when handleItemClick is called', () => {
    const dispatchMock = jest.fn(); // Create a mock function for useDispatch
    const useSelectorMock = jest.fn(); // Create a mock function for useSelector

    // Set the return value for useSelector
    useSelectorMock.mockReturnValue({
      app: { // Add the correct namespace for the state slice
        selectedItem: {
          id: 0,
          name: '',
          category: '',
          flag: '',
          duration: '',
          details: {
            difficulty: '',
            description: '',
            protein: '',
            spiceLevel: '',
            spices: '',
            cookingOil: '',
            volumeWeight: 0,
            serves: 0,
            authenticity: '',
            stock: '',
            produce: '',
            origin: '',
          },
        },
      },
      add: {
        listItems: [], // Provide a valid array of list items
      },
    });

    // Mock useDispatch to capture dispatched actions
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

    // Replace the original useSelector with the mock function
    (useSelector as jest.Mock).mockImplementation(useSelectorMock);

    const wrapper = shallow(<App />);
    const handleItemClick = wrapper.find(SearchBar).prop('handleItemClick');

    const selectedItem = {
      id: 1,
      name: 'Item 1',
      category: 'Hard',
      flag: 'sampleFlagPath',
      duration: 'sampleDuration',
      details: {
        difficulty: 'Hard',
        description: 'Some description',
        protein: 'Some protein',
        spiceLevel: 'Some spice level',
        spices: 'Some spices',
        cookingOil: 'Some cooking oil',
        volumeWeight: 1,
        serves: 1,
        authenticity: 'Some authenticity',
        stock: 'Some stock',
        produce: '',
        origin: '',
      },
    };

    // Simulate a click on an item in the SearchBar
    handleItemClick(selectedItem);

    // Ensure that setSelectedItem action creator is called with the correct payload
    expect(dispatchMock).toHaveBeenCalledWith(addItem(selectedItem));
  });
});
