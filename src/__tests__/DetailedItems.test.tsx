import { shallow } from 'enzyme';
import DetailedItems from '../components/DetailedItems';

const selectedItemDetails = {
  id: 1,
  name: 'Item 1',
  category: 'Hard',
  flag: 'sampleFlagPath', 
  duration: 'sampleDuration', 
  details: {
    difficulty: 'Hard',
    description: 'Some description',
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
};

describe('DetailedItems Component', () => {
  it('renders without crashing', () => {
    shallow(<DetailedItems selectedItemDetails={null} onAddRecipeClick={() => {}}/>);
  });

  it('should render the correct category icon based on selectedItemDetails', () => {
    const wrapper = shallow(<DetailedItems selectedItemDetails={selectedItemDetails} onAddRecipeClick={() => {}}/>);
    const categoryIcon = wrapper.find('.item-description img');
    const expectedIconPath = 'dishHard.svg';

    // Check if the actual icon path matches the expected icon path
    expect(categoryIcon.prop('src')).toEqual(expectedIconPath);
    expect(categoryIcon.prop('alt')).toEqual('flag');
  });

  it('should generate a random background color for the item description', () => {
    const wrapper = shallow(<DetailedItems selectedItemDetails={selectedItemDetails} onAddRecipeClick={() => {}}/>);
    const itemDescription = wrapper.find('.item-description');
    expect(itemDescription.prop('style')).toHaveProperty('backgroundColor');
  });

});
