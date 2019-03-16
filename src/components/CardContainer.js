import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import CharacterCard from './CharacerCard';
import ModalCharacter from './ModalCharacter';

class CardsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="">
                
            </div>
        )
    }
}

const mapStateToProps = () => {
    // Access to the array characters

}

export default CardsContainer;

// Info for different characters will be stored in an array
// From there you can import Character card component and pass info in to them as props
// For each character in the array render a related Character picture 

