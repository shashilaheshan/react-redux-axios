import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';

class CharacterList extends Component {
    
    render() {
      
        return (
            <div>
                <h1>Characters</h1>
                <ul>
                    {
                        this.props.characters.map(character=>{
                            return (
                                <li key={character.id}>{character.name}<button onClick={()=>this.props.addCharacterById(character.id)}>+</button></li>
                            );
                        })
                    }
                </ul>
                
            </div>
        )
    }
}
function mapStateToProps(state){
   
    return {
        characters:state.characters
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch);
 }
export default  connect(mapStateToProps,mapDispatchToProps)(CharacterList);