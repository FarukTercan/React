import React, { useState } from 'react';

function Form(props) {
  const [city, setCities] = useState('');

  const handleCity = e => {
    setCities(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    city && props.onSubmitForm(city);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label>
          <input
            className="form-input"
            name="city"
            type="search"
            placeholder="search city"
            onChange={e => handleCity(e)}
          />
        </label>

        <label>
          <input className="form-submit" value="Search" type="submit" />
        </label>
      </form>
    </div>
  );
}

export default Form;
