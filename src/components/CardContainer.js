import React, { Component} from 'react';
import CharacterCard from './CharacerCard.js';

characters= [];

class CardsContainer extends Component {
    constructor(props) {
        super(props)
    }
    // The container for the individual character cards
    render() {
        return (
            <div className="">

            </div>
        )
    }
}
export default CardsContainer;

// Info for different characters will be stored in an array
// From there you can import Character card component and pass info in to them as props
// For each character in the array render a related Character card component

