import React from 'react';
import { connect } from 'react-redux'; 

const CharacterCard = (props) => (
    // Individual Character 
    <div className="">
        <h2>{}</h2>
        <p>{}</p>
        <p>{}</p>
    </div>
)

const mapStateToProps = () => {
    // Access to the redux array characters
    
}

export default connect(mapStateToProps) (CharacterCard);