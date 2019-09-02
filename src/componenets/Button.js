import React, { Component } from 'react'
import {connect} from 'react-redux';

class GetButton extends Component {
    alertData(data){
     alert(data.length);
    }

   
    render() {
        return (
            <button onClick={()=>this.alertData(this.props.heroes)}>GET DATA</button>
        )
    }
}
function msp(state){

    return {
       heroes:state.heroes
    };
}
export default connect(msp,null)(GetButton);