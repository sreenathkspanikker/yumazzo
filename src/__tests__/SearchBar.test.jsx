import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchBar from '../components/SearchBar';

const mockStore = configureStore([]);

describe('SearchBar Component', () => {
  it('should render without crashing', () => {
    const store = mockStore({ add: { listItems: [] } });
    const wrapper = shallow(
      <Provider store={store}>
        <SearchBar handleItemClick={() => {}} />
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
