import React from 'react';
import ReactDOM from 'react-dom';

import './ModalView.css';
import { connect } from 'react-redux';
import { showModal } from '../../services/redux/actions';

const ModalView = (props) => {

    const closeModal = () => {
        showModal(false);
    }

    return ReactDOM.createPortal(
        <div id="modalWrapper">
            <div id="modalBackdrop">
                <div id="modalViewContainer">
                    <div id="bookUpModalView">
                        <div id="closeModalView" onClick={closeModal}>X</div>
                        <img id="bookCoverModalView" src={props.bookDetail.imagePath} alt=""/>
                    </div>
                    <div id="bookDownModalView">
                        <div id="titleModalView">{props.bookDetail.title}</div>
                        <div id="descriptionModalView">{props.bookDetail.description}</div>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
}

const mapStateToProps = (state) => ({bookDetail: state.bookDetail, showModal: state.showModal})
export default connect(mapStateToProps) (ModalView);