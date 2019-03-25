import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

export default class AddElement extends Component{
  state = {
    selectedItem: ''
  }

  InputField = async () => {
    const container = React.createElement('div',{"className": "DropDownBlock"})
    await this.setState({
      selectedItem: container
    });
    this.props.onCreated(container)
    return container
  }
  render(){
    return(
      <div>
      <Button onClick={this.InputField} className="plus"><i className="fas fa-plus"></i></Button>
      </div>
    )
  }
}
