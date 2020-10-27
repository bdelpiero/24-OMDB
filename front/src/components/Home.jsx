import React from "react";

export default ({ data, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group row'>
        <label htmlFor='inputTitle' className='col-sm-2 col-form-label'>
          Title
        </label>
        <div className='col-sm-10'>
          <input
            name='title'
            value={data.title}
            type='text'
            className='form-control'
            id='inputTitle'
            placeholder='Title'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='form-group row'>
        <label htmlFor='inputYear' className='col-sm-2 col-form-label'>
          Year
        </label>
        <div className='col-sm-10'>
          <input
            name='year'
            value={data.year}
            type='text'
            className='form-control'
            id='inputYear'
            placeholder='Year'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='form-group row'>
        <label htmlFor='selectPlot' className='col-sm-2 col-form-label'>
          Plot
        </label>
        <div className='col-sm-10'>
          <select name='type' value={data.type} id='selectType' onChange={handleInputChange}>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
            <option value='episode'>Episode</option>
          </select>
        </div>
      </div>
      <div className='form-group row'>
        <div className='col-sm-10'>
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
