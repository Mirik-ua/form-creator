import React, {Component} from 'react'
import { FormLabel,Form,Dropdown,
  FormControl,DropDown,Row,Col,
  DropdownButton } from 'react-bootstrap';
import NewSectionCss from './NewSection.css'
import ParagraphInput from './Question/ParagraphInput';

export default class NewSection extends Component{
  constructor(props){
    super(props)
    this.elem = [];

    this.state = {
      elements: [],
      selectedItem: '',
      currentType: '',
      elem : [],
      titleVal: ''
    }
    this.questions = [];
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      titleVal: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  newField(paragraph){

    switch (this.state.typeVal) {
      case paragraph:
      this.setState({
        elem: [
          ...this.state.elem,
          1
        ]
      })
    }
  };

  getJSON() {
    return {
      nameSection: this.nameSection.value,
      title: this.title.value,
      description: this.description.value,
      questions: this.elem.map(i => i.getJSON())
    }
    console.log(this.state.questions.getJSON())
  }

  handleDelete = (event) =>{
    this.props.onDeleteSection();
  }

  render(){
    return(
      <Form className="createForm" onSubmit={this.handleSubmit}>
        <Form.Group className="CreateNewBlock" controlId="formBasicEmail">
        <Row className="py-1">
          <Col >
              <i className="fas fa-trash" onClick={this.handleDelete}></i>
          </Col >
          <Col  className="dropdowm">
          <DropdownButton id="dropdown-basic-button" size="sm" title="add">
            <Dropdown.Item onClick={this.newField.bind(this,this.state.typeVal)}>paragraph</Dropdown.Item>
          </DropdownButton>
          </Col>
        </Row>
          <Row>
            <Col>
              <Form.Control
               onChange={this.handleChange}
                value={this.state.titleVal}
                 size="lg"
                 placeholder="Section name"
                 ref={el => this.nameSection = el}/>
            </Col>
          </Row>
          <Row 	className="py-2">
            <Col xs={3}>
              <FormLabel>Title :</FormLabel>
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
              <Form.Control as="textarea" rows="2" ref={el => this.description = el} />
            </Col>
          </Row>
          <Row>
            <Col>
              {
                this.state.elem.map( (el,index) => {
                  return(
                    <ParagraphInput
                      key={index}
                      id={index}
                      ref={el => this.elem[index] = el}
                      onDelete={(e)=>{
                        console.log(e);
                        this.state.elem.splice(e.props.id, 1);
                        this.setState({
                          elem: [
                            ...this.state.elem
                          ]
                        })
                      }}
                    />
                  )
                })
              }
            </Col>
          </Row>
        </Form.Group>
      </Form>
    )
  }
}
