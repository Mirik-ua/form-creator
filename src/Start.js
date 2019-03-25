import React, {Component} from 'react'
import StartCss from './Start.css'
import {Button} from 'react-bootstrap'
export default class Start extends Component{
  StartBtn = () => {
    console.log("start")
  }
  render(){
    return(
      <div>
        <Button onClick={this.StartBtn} variant="success" className="start">Start</Button>
      </div>
    )
  }
}
