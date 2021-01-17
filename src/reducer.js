const initialState = {
  regions: [],
  categories: [],
  selectedCategoryId: 0,
  selectedRegionName: '',
  restaurants: [],
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  selectRegion: (state, { name }) => ({
    ...state,
    selectedRegionName: name,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  selectCategory: (state, { id }) => ({
    ...state,
    selectedCategoryId: id,
  }),
  setRestaurants: (state, { restaurants }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}