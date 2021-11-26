import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Search = props => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-4">
          <Form>
            <Row>
              <Col className="d-flex justify-content-end" sm="7">
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </Col>
              <Col className="d-flex justify-content-start">
                <Button className="w-50" variant="dark">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Search.propTypes = {};

export default Search;
