import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RecipeForm from '../components/RecipeForm';

const mockStore = configureMockStore(); // Create a mock store function

describe('RecipeForm', () => {
    it('should render without errors', () => {
        const store = mockStore({ add: { listItems: [] } }); // Create a mock store with the required initial state
        const mockOnBackButtonClick = jest.fn();
        const wrapper = shallow(
            <Provider store={store}>
                <RecipeForm onBackButtonClick={mockOnBackButtonClick} />
            </Provider>
        );

        expect(wrapper.exists()).toBe(true);
    });
});