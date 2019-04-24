import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import { characters } from '../store/characters';
import ModalCharacter from './ModalCharacter';

class CardsContainer extends Component {
    constructor(props) {
        super(props)
    }
    // Make picture list with .map. After doing this, delete this comment
    renderList() {
        this.props.characters.map( char => {
            return (
                <li>
                    <img src={char.img}/> 
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <h1>Choose Your Fighter!</h1>
                <ul>{this.renderList()}</ul>
                <ModalCharacter />
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

const mapDispatchToProps = dispatch => {
    return {
        selectCharacter: character => dispatch(selectCharacter()) 

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);

// Info for different characters will be stored in an array
// For each character in the array render a related Character picture 

