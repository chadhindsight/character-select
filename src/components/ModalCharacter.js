import React from 'react';
import Modal from 'react-modal';
import CharacterCard from './CharacerCard';
import { connect } from 'react-redux'
// This should pop when a character frame is clicked  and display user's choice 
class ModalCharacter extends React.Component{
    constructor() {
        super();
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
                </Modal>
            </div>
        )
    }
}
// Sort this out!
const mapStatetoProps = state = () =>{
    
}
    
export default connect(mapStatetoProps)(ModalCharacter);