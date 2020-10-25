import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function updateSelectedRegionName(regionName) {
  return {
    type: 'updateSelectedRegionName',
    payload: {
      regionName,
    },
  };
}

export function updateSelectedCategoryId(categoryId) {
  return {
    type: 'updateSelectedCategoryId',
    payload: {
      categoryId,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { region, category } = getState();

    const { selectedRegionName } = region;
    const { selectedCategoryId } = category;

    const restaurants = await fetchRestaurants({
      regionName: selectedRegionName,
      categoryId: selectedCategoryId,
    });

    dispatch(setRestaurants(restaurants));
  };
}
