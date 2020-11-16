import React, {Component} from 'react'
import './buttons.css'

export default class Buttons extends Component {

   render() {
      return(
         <div className="buttonsContainer">
         <button className="delButton">Delete checked task</button>
         <button className="clearButton" >Clear input</button>
     </div>
      )
   }
}