import map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { ESSENTIALS_CATEGORIES, FOOD_CATEGORIES, MEDICINE_CATEGORIES, MONEY_CATEGORIES, SUPPLIES } from "../constants";

const SupplyItem = ({ data, onChange }) => {
  const [id, setId] = React.useState(data ? data.id : '');

  const handleValueChange = (event) => {
    const { value } = event.target;
    return onChange({ id, value });
  };

  return (
    <InputGroup className="mb-3">
      <FormControl as="select" onChange={(event) => setId(event.target.value)} value={id}>
        <option value={SUPPLIES['life-vest'].id}>{SUPPLIES['life-vest'].label}</option>
        <option value={SUPPLIES['water'].id}>{SUPPLIES['water'].label}</option>
        <optgroup label={SUPPLIES['food'].label}>
          {map(FOOD_CATEGORIES, (data) => (
            <option key={data.id} value={data.id}>{data.label}</option>
          ))}
        </optgroup>
        <optgroup label={SUPPLIES['medicine'].label}>
          {map(MEDICINE_CATEGORIES, (data) => (
            <option key={data.id} value={data.id}>{data.label}</option>
          ))}
        </optgroup>
        <optgroup label={SUPPLIES['money'].label}>
          {map(MONEY_CATEGORIES, (data) => (
            <option key={data.id} value={data.id}>{data.label}</option>
          ))}
        </optgroup>
        <optgroup label={SUPPLIES['essentials'].label}>
          {map(ESSENTIALS_CATEGORIES, (data) => (
            <option key={data.id} value={data.id}>{data.label}</option>
          ))}
        </optgroup>
      </FormControl>

      <FormControl value={data ? data.value : ''} onChange={handleValueChange} />
    </InputGroup>
  );
};

SupplyItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

export default SupplyItem;
