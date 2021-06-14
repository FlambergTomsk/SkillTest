import { HomePageAPI } from "../api/api";

let SET_HEROES = 'SET-HEROES';
let CHANGE_PAGE = 'CHANGE-PAGE';
let GET_TOTAL_COUNT = 'GET-TOTAL-COUNT';
let IS_LOADING = 'IS-LOADING';
let ADD_CHOOSEN = 'ADD-CHOOSEN';
let DEL_CHOOSEN = 'DEL-CHOOSEN';
let SET_SEARCH_VALUE = 'SET-SEARCH-VALUE';
let SET_CHOOSEN_HEROES = 'SET_CHOOSEN_HEROES'



const initialState = {
    heroes: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 10,
    loading: false,
    choosen: [],
    searchValue: ''
};



const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEROES: {
            return { ...state, heroes: action.heroes }
        };
        case SET_CHOOSEN_HEROES: {
            return { ...state, choosen: action.choosenHeroes}
        };
        case CHANGE_PAGE: {
            return { ...state, currentPage: action.page }
        };

        case GET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        };

        case IS_LOADING: {
            return { ...state, loading: action.loading }
        };

        case ADD_CHOOSEN: {
            return { ...state, choosen: [...state.choosen, action.choosen] }
        };

        case DEL_CHOOSEN: {
            return { ...state, choosen: state.choosen.filter(hero => hero.name !== action.choosen.name) }
        };

        case SET_SEARCH_VALUE: {
            return { ...state, searchValue: action.searchValue }
        }


        default:
            return state;
    }
}
export default homePageReducer;


    export const setHeroes = (heroes) => ({ type: SET_HEROES, heroes });
    const setChoosenHeroes = (choosenHeroes) => ({ type: SET_CHOOSEN_HEROES, choosenHeroes });
    export const getTotalCount = (totalCount) => ({ type: GET_TOTAL_COUNT, totalCount })
    export const changePage = (page) => ({ type: CHANGE_PAGE, page });
    export const isLoading = (loading) => ({ type: IS_LOADING, loading });
    const addChoosenAC = (choosen) => ({ type: ADD_CHOOSEN, choosen });
    const delChoosenAC = (choosen) => ({ type: DEL_CHOOSEN, choosen });
    export const setSearchValue = (searchValue) => ({ type: SET_SEARCH_VALUE, searchValue })

    export const getHeroes = (currentPage, searchValue) => {
        return dispatch => {
            dispatch(isLoading(true));
            let choosen=[];
            let json=localStorage.getItem('arrayChoosen')
            choosen = JSON.parse(json) || [];
            dispatch(setChoosenHeroes(choosen));
            HomePageAPI.getHeroes(currentPage, searchValue)
                .then(data => {
                    dispatch(isLoading((false)));
                    dispatch(setHeroes(data.results));
                    dispatch(getTotalCount(data.count));
                });
        }
    }


    export const addChoosen = (choosenHero) => {
        return (dispatch, getState) => {
            dispatch(addChoosenAC(choosenHero));
            const choosen = getState().homePage.choosen;
            localStorage.setItem('arrayChoosen', JSON.stringify(choosen));
        }
    }



    export const delChoosen = (choosenHero) => {
        return (dispatch, getState) => {
            dispatch(delChoosenAC(choosenHero));
            const choosen = getState().homePage.choosen;
            localStorage.setItem('arrayChoosen', JSON.stringify(choosen));
        }
    }





