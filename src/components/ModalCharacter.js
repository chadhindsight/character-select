import React from 'react';
import Modal from 'react-modal';
import CharacterCard from './CharacerCard';

// This should pop when a character frame is clicked  and display the user's choice 
class ModalCharacter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }; 
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal () {
        this.setState({showModal: !showModal});
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel={Character}>
                    <h3>{}</h3>
                    <p>{}</p>
                    <p>{}</p>
                </Modal>
            </div>
        )
    }
}

    
export default ModalCharacter;