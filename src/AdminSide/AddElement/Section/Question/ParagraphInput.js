import React, {Component} from 'react'
import { Container,Dropdown,FormLabel,Form,FormGroup,FormControl,Row,Col} from 'react-bootstrap';
import ParagraphInputCss from './ParagraphInput.css'

export default class ParagraphInput extends Component{
  constructor(props) {
    super(props);
    this.type = 'Input';

    this.state={
      elem: []
    }
  }
  getJSON() {
    return {
      title: this.title.value,
      description: this.description.value,
      isRequired: this.isRequired.checked
    }
  }
  selfDelete = () => {
    this.props.onDelete instanceof Function && this.props.onDelete(this);
  }
  render(){
    return(
      <Container  className="newField">
        <Row className="py-2 px-md-2">
          <Col xs={3}>
            <FormLabel>Question :</FormLabel>
          </Col>
          <Col xs={9}>
            <Form.Control ref={el => this.title = el}/>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <FormLabel>Description :</FormLabel>
          </Col>
          <Col xs={9}>
            <Form.Control ref={el => this.description = el} />
          </Col>
          </Row>
          <Row className="bottom_block">
            <Col xs={6}>
              <i className="fas fa-trash-alt" onClick={this.selfDelete}></i>
            </Col>
            <Col xs={4}>
              <FormLabel>is Required: </FormLabel>
            </Col>
            <Col className="isRequired" xs={2}>
              <input type="checkbox" ref={el => this.isRequired = el}/>
            </Col>
        </Row>
      </Container>
    )
  }
}
