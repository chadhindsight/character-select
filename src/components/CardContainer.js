import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import CharacterCard from './CharacerCard';
import ModalCharacter from './ModalCharacter';
import { characters } from '../store/characters';

class CardsContainer extends Component {
    constructor(props) {
        super(props)
    }
    // Make picture list with .map. After doing this, delete this comment
    renderList() {
        this.props.characters.map( char => {
            return (
                <li>
                    <h2>{char.name}</h2>
                    <img src={char.img}/> 
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul>{this.renderList()}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Access to the different pics of characters
    return {
        characters: state.characters
    }

}

export default connect(mapStateToProps)(CardsContainer);

// Info for different characters will be stored in an array
// For each character in the array render a related Character picture 

