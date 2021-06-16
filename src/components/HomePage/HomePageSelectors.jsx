


export const getHeroesArray = (state)=>{
  return state.homePage.heroes
};


export const getTotalCountNumber = (state)=>{
  return state.homePage.totalCount
};

export const getCurrentPage = (state)=>{
  return state.homePage.currentPage
};

export const getPageSize = (state)=>{
  return state.homePage.pageSize
};

export const getLoading = (state)=>{
  return state.homePage.loading
};

export const getChoosenArray = (state)=>{
  return state.homePage.choosen
};

export const getSearchValue = (state)=>{
  return state.homePage.searchValue
}
