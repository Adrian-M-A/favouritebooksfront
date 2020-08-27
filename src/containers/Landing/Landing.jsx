import React from 'react';
import { getAllBooks } from '../../services/redux/actions';
import { connect } from 'react-redux';

import './Landing.css';

import Book from '../../components/Book/Book';
import { useEffect } from 'react';
import ModalView from '../../components/ModalView/ModalView';
import ModalEdit from '../../components/ModalEdit/ModalEdit';

const Landing = (props) => {

    useEffect(() => {
        getAllBooks();
    }, [])

    return(
        <div id="landingContainer">
            {props.books?.map(book => <Book key={book?._id} book={book}/>)}
            {props.showModal && <ModalView />}
            {props.editModal && <ModalEdit />}
        </div>
    )

}

const mapStateToProps = (state) =>({books : state.allBooks, showModal: state.showModal, editModal: state.editModal})
export default connect(mapStateToProps)(Landing);