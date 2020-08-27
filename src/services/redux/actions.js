import axios from 'axios';
import { API_URL } from '../../config/api';
import store from './store.js';
import { GET_ALL_BOOKS, BOOK_DETAIL, SHOW_MODAL, EDIT_MODAL } from './types/book';

export const getAllBooks = async() => {
    
    const res = await axios.get(API_URL);
    store.dispatch({
        type: GET_ALL_BOOKS,
        payload: res.data
    })
}

export const viewBookDetail = async(book) => {
    store.dispatch({
        type: BOOK_DETAIL,
        payload: book
    })
}

export const showModal = async(bool) =>{
    store.dispatch({
        type: SHOW_MODAL,
        payload: bool
    })
}

export const editModal = async(bool) =>{
    store.dispatch({
        type: EDIT_MODAL,
        payload: bool
    })
}
