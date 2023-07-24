import React from 'react';
import { shallow } from 'enzyme';
import ListItems from '../components/ListItems';
import { ListItem } from '../utils/types';

// Mock the image imports
jest.mock('../assets/images/india.svg', () => '');
jest.mock('../assets/images/vietnam.svg', () => '');
jest.mock('../assets/images/thailand.svg', () => '');
jest.mock('../assets/images/hard.svg', () => '');
jest.mock('../assets/images/easy.svg', () => '');
jest.mock('../assets/images/meedium.svg', () => '');

describe('ListItems Component', () => {
  const mockListItems: ListItem[] = [
    {
      id: 1,
      name: 'Item 1',
      category: 'Hard',
      flag: 'sampleFlagPath1',
      duration: 'sampleDuration1',
      details: {
        difficulty: 'Hard',
        description: 'Some description 1',
        protein: '...',
        spiceLevel: '...',
        spices: '...',
        cookingOil: '...',
        volumeWeight: 1,
        serves: 1,
        authenticity: '...',
        stock: '...',
        produce: '',
        origin: ''
      },
    },
    {
      id: 2,
      name: 'Item 2',
      category: 'Medium',
      flag: 'sampleFlagPath2',
      duration: 'sampleDuration2',
      details: {
        difficulty: 'Medium',
        description: 'Some description 2',
        protein: '...',
        spiceLevel: '...',
        spices: '...',
        cookingOil: '...',
        volumeWeight: 1,
        serves: 1,
        authenticity: '...',
        stock: '...',
        produce: '',
        origin: ''
      },
    },
    {
      id: 3,
      name: 'Item 3',
      category: 'Easy',
      flag: 'sampleFlagPath3',
      duration: 'sampleDuration3',
      details: {
        difficulty: 'Easy',
        description: 'Some description 3',
        protein: '...',
        spiceLevel: '...',
        spices: '...',
        cookingOil: '...',
        volumeWeight: 1,
        serves: 1,
        authenticity: '...',
        stock: '...',
        produce: '',
        origin: ''
      },
    },
  ];

  it('should render the list items correctly', () => {
    // Arrange
    const handleItemClickMock = jest.fn();

    // Act
    const wrapper = shallow(<ListItems listItems={mockListItems} handleItemClick={handleItemClickMock} />);

    // Assert
    expect(wrapper.find('li')).toHaveLength(mockListItems.length);
    expect(wrapper.find('.name').at(0).text()).toContain('Item 1');
    expect(wrapper.find('.name').at(1).text()).toContain('Item 2');
    expect(wrapper.find('.name').at(2).text()).toContain('Item 3');
    expect(wrapper.find('.category').at(0).text()).toContain('Hard');
    expect(wrapper.find('.category').at(1).text()).toContain('Medium');
    expect(wrapper.find('.category').at(2).text()).toContain('Easy');
  });

  it('should call handleItemClick when a list item is clicked', () => {
    // Arrange
    const handleItemClickMock = jest.fn();
    const wrapper = shallow(<ListItems listItems={mockListItems} handleItemClick={handleItemClickMock} />);

    // Act
    wrapper.find('li').at(0).simulate('click');

    // Assert
    expect(handleItemClickMock).toHaveBeenCalledWith(mockListItems[0]);
  });
});
