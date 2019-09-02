import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import GetButton from '../componenets/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

class Power extends Component {
   

    render() {
        return (
            <div>
                <h1>Power</h1>
                <h2>{this.props.power}</h2>
                <h1>Strength</h1>
                <h2>{this.props.str}</h2>
                <GetButton/>
                <h1>{this.props.isfetching?<Loader
         type="Triangle"
         color="#00BFFF"
         
         height="100"
         width="100"
      />:<h4>Loaded</h4>}</h1>
                <h3>Recepes</h3>
                {
                    this.props.recepes.map((item,key)=>{
                        return (
                            <div key={key}>

                            <li>{item.title}
                               <img src={item.thumbnail}/>
                            </li>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
function mapstToProps(state){
   
    return {
     power:state.power.power,
     str:state.power.stregth,
     recepes:state.recepe.recepe,
     isfetching:state.recepe.loading
    };
}
export default connect(mapstToProps)(Power);