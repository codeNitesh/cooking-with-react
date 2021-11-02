import React, {Component} from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count: props.initailCount
        }
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {style =>(
                    <div>
                        <button style={style} onClick={()=> this.changeState(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={()=> this.changeState(1)}>+</button>
                    </div>
                )}
                
            </ThemeContext.Consumer>
        )
    }

    changeState(amount){
        this.setState(prevState =>{
            return {count: prevState.count + amount}
       })
   }
}