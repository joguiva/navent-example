import React from 'react';
import CustomAccordion from '../Commons/Accordion';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import Search from '../search';
import './style.scss';

function Page(props) {
  const {
    value,
    operation,
    handleChange,
    handleOperation
  } = props;
  return (
    <div className="sidebar">
        <h5>
          Filtrado actual
        </h5>

      <hr />

      <CustomAccordion header="Dirección" open={true}>
        <Search
          value={value}
          handleChange={handleChange}
        />
      </CustomAccordion>

      <hr />

      <CustomAccordion header="Tipo de operación" open={true}>
        <FormControl component="fieldset">
          <RadioGroup
            value={operation}
            aria-label="operation"
            name="operation"
            onChange={(event) => handleOperation(event.target.value)}
          >
            <FormControlLabel value="2" control={<Radio />} label="Comprar" />
            <FormControlLabel value="1" control={<Radio />} label="Alquilar" />
            <FormControlLabel value="3" control={<Radio />} label="Temporal" />
            <FormControlLabel value="0" control={<Radio />} label="Todos" />
          </RadioGroup>
        </FormControl>
      </CustomAccordion> 
    </div>

  );
}

export default Page;