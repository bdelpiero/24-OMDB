import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default ({ data, handleInputChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className='search-form' style={{ maxWidth: "500px" }}>
      <div className='form-subgroup'>
        <Form.Group className='form-title'>
          <Form.Control
            name='title'
            value={data.title}
            type='text'
            className='form-control'
            id='inputTitle'
            placeholder='Title'
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='form-plot' style={{ maxWidth: "150px" }}>
          <Form.Control
            as='select'
            name='type'
            value={data.type}
            id='selectType'
            onChange={handleInputChange}>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
            <option value='episode'>Episode</option>
          </Form.Control>
        </Form.Group>
      </div>

      <Button
        variant='warning'
        type='submit'
        style={{ color: "white", fontWeight: "600" }}
        className='form-button'>
        Search
      </Button>
    </Form>
  );
};
