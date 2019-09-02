import React,{Component} from 'react';
import CharacterList from '../componenets/character-list';
import HeroesList from '../componenets/heros-list';
import Power from '../componenets/power';
import axios from 'axios';
import {connect} from 'react-redux';
import {getRecepes,gettingRecepes} from '../actions';
class App extends Component{
     
    getData(){
       this.props.gettingRecepes();
       axios.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3',{ crossdomain: true })
       .then(res=>{
         
          this.props.getRecepes(res.data.results)
       })
       
       
      
    }
    componentDidMount(){
        this.getData();
    }
  
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                       <CharacterList/>
                    </div>
                    <div className="col-md-6">
                       <HeroesList/>
                    </div>
                    <Power/>
                </div>
            
            </div>
        )
    }
}
function msp(state){
  console.log(state);
}

export default connect(msp,{getRecepes,gettingRecepes})(App);