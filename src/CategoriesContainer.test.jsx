import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../__fixtures__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategoriesContainer() {
    return render((
      <CategoriesContainer />
    ));
  }

  it('renders categories', () => {
    const { getByText } = renderCategoriesContainer();

    categories.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });

  context('click category button', () => {
    it('dispatch selectCategory action', () => {
      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText(categories[0].name));

      expect(dispatch).toBeCalledWith(
        {
          type: 'selectCategory',
          payload: {
            id: categories[0].id,
          },
        },
      );
    });
  });
});