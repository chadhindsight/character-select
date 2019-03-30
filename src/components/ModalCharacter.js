import React from 'react';
import Modal from 'react-modal';
import CharacterCard from './CharacerCard';

// This should pop when a character frame is clicked 
const ModalCharacter = (props) => (
    <Modal
    // modal related props
    isOpen={false}
        onRequestClose={}
        contentLabel="Selected Character">

    </Modal>
)
export default ModalCharacter;