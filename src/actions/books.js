import api from '../api';
import {BOOKS_FETCHED} from '../types';
import { normalize } from 'normalizr';
import { bookSchema } from '../schemas';


//data.entities.books
const booksFetched = (data) => ({
        type: BOOKS_FETCHED,
        data
})

export const fetchBooks = () => (dispatch) => (
    api.books.fetchAll()
        .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))))
)