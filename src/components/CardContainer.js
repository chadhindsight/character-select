import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import CharacterCard from './CharacerCard';
import ModalCharacter from './ModalCharacter';
import { characters } from '../store/characters';

class CardsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    // Access to the different pics of characters
    return {
        characters: state.characters
    }

}

export default connect(mapStateToProps)(CardsContainer);

// Info for different characters will be stored in an array
// For each character in the array render a related Character picture 

