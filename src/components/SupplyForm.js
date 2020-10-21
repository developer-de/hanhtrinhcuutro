import map from 'lodash/map';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SupplyItem from './SupplyItem';

const SupplyForm = () => {
  const [name, setName] = React.useState('');
  const [peopleCount, setPeopleCount] = React.useState(1);
  const [floodNumber, setFloodNumber] = React.useState(7);
  const [supplies, setSupplies] = React.useState([]);

  // TODO: there can be duplicated data key, but it will preserve the order
  const updateSupplies = (data) =>
    setSupplies((prevState) => ([...prevState, data]));

  return (
    <Form>
      <Form.Group as={Row} controlId="form-name">
        <Form.Label column sm={3}>
          Tên
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="form-number-of-people">
        <Form.Label column sm={3}>
          Số người theo đoàn cứu trợ
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" value={peopleCount} onChange={(event) => setPeopleCount(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="form-flood-number">
        <Form.Label column sm={3}>
          Cứu trợ cho lũ số
        </Form.Label>
        <Col sm={9}>
          <Form.Control as="select" value={floodNumber} onChange={(event) => { setFloodNumber(event.target.value); }}
          >
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="form-flood-number">
        <Form.Label column sm={3}>
          Hàng cứu trợ
        </Form.Label>
        <Col sm={9}>
          <Row>
            <Col>
              {map(supplies, (data) => (<SupplyItem key={data.id} data={data} onChange={updateSupplies} />))}
              <SupplyItem onChange={updateSupplies} />
            </Col>
          </Row>
        </Col>
      </Form.Group>

      <Row>
        <Col><Button className="float-right" variant="primary">Lưu</Button></Col>
      </Row>
    </Form>
  );
};

export default SupplyForm;
