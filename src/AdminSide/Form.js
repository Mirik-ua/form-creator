import React, { Component } from 'react';
import AddElement from './AddElement/AddElement'
import NewSection from './AddElement/Section/NewSection'
import FormCss from './Form.css'
import { Container,Dropdown,Button,
FormLabel,Form,FormGroup,FormControl,
InputGroup,DropDown,Row,Col,
DropdownButton } from 'react-bootstrap';

export default class Forms extends Component {

  constructor(props) {
    super(props);
    this.sections = [];

    this.state = {
      sections: [performance.now()],
      sectionNode: []
    }
  }
  render() {
    return (
      <Container className="wrapperBlock">
            <Container className="wrapperCentralBlock">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="centralBlock">
                {
                  this.state.sections.map((i, index) => {
                    return (
                      <NewSection key={i} ref={el => this.sections[index] = el} onDeleteSection={()=>{

                        this.state.sections.splice(index, 1);
                        this.setState({
                          sections: [
                            ...this.state.sections
                          ],
                          sectionNode: this.sections
                        });
                      }} />
                    );
                  })
                }
              </Col>
              <Col md={{ span: 1, offset: 1 }}>
                <AddElement onCreated={()=>{

                  this.setState({
                    sections: [
                      ...this.state.sections,
                      performance.now()
                    ],
                    sectionNode: this.sections
                  })
                  console.log(this.state)
                }}/>
                <Button className="danger send" onClick={()=>{
                  this.sections.forEach((item, index, arr)=> {
                    if(!item) arr.splice(index, 1);
                  });

                  console.log(this.sections.map(i=>i.getJSON()))
                }}>Send</Button>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
  }
