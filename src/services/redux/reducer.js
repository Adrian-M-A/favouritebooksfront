const { GET_ALL_BOOKS, BOOK_DETAIL, SHOW_MODAL, EDIT_MODAL } = require("./types/book");

const initialState = {
    allBooks: [],
    bookDetail: {},
    showModal: false,
    editModal: false,
}

function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_BOOKS:
            return {
                ...state,
                allBooks: action.payload
            }
        case BOOK_DETAIL:
            return {
                ...state,
                bookDetail: action.payload
            }
        case SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        case EDIT_MODAL:
            return {
                ...state,
                editModal: action.payload
            }
        default:
            return state;
    }
}

export default reducer;