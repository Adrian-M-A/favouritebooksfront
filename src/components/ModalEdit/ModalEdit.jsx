import React, { useState } from 'react';

import './ModalEdit.css';
import { connect } from 'react-redux';
import { editModal } from '../../services/redux/actions';
import socketIOClient from 'socket.io-client';

const ModalEdit = (props) => {

    let socket = socketIOClient("http://localhost:8000/");
    const [newTitle, setNewTitle] = useState('');

    const handleChange = (event) =>{
        setNewTitle(event.target.value)
        updateTitle();
    }

    const updateTitle = () => {
        const book = {
            id: props.bookDetail._id,
            title: newTitle,
        }

        socket.emit('putBook', book);
    }

    const closeModal = () => {
        editModal(false);
    }

    return (
        <div id="modalEditWrapper">
            <div id="modalEditBackdrop">
                <div id="modalEditContainer">
                    <div id="bookUpModalEdit">
                    <div id="closeModalEdit" onClick={closeModal}>X</div>
                        <img id="bookCoverModalEdit" src={props.bookDetail.imagePath} alt="Portada"/>
                    </div>
                    <div id="bookDownModalEdit">
                        <input id="titleModalEdit" name="bookTitle" defaultValue={props.bookDetail.title} onChange={handleChange}></input>
                        <div id="descriptionModalEdit">{props.bookDetail.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({bookDetail: state.bookDetail, showModal: state.showModal})
export default connect(mapStateToProps) (ModalEdit);