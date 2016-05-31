require('bootstrap-webpack');
require('whatwg-fetch');

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Navbar,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import CowSays from './cowSays.jsx';

class Hello extends React.Component {

  constructor() {
    super();
    this.state = {
      thought: 'Hello campjs vii!',
    };
  }

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cow Say</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1}>
              <CowSays />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Hello />, root);
