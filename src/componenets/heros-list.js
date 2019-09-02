import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeCharacterById} from '../actions';
 class HeroesList extends Component {
    render() {
       
        return (
            <div>
                <h1>Heroes List</h1>
                 <ul>
                     {
                         this.props.heroes.map(hero=>{
                             return(
                                 <li key={hero.id}>{hero.name} <button onClick={()=>this.props.removeCharacterById(hero.id)}>-</button></li>
                             );
                         })
                     }
                 </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
   heroes:state.heroes
    };
}
function mapdispatchToProps(dispatch){
    return bindActionCreators({removeCharacterById},dispatch);
}
export default connect(mapStateToProps,mapdispatchToProps)(HeroesList);