import React from "react";

export default () => {
  return (
    <form>
      <div className='form-group row'>
        <label htmlFor='inputTitle' className='col-sm-2 col-form-label'>
          Title
        </label>
        <div className='col-sm-10'>
          <input type='text' className='form-control' id='inputTitle' placeholder='Movie Title' />
        </div>
      </div>
      <div className='form-group row'>
        <label htmlFor='inputYear' className='col-sm-2 col-form-label'>
          Year
        </label>
        <div className='col-sm-10'>
          <input type='text' className='form-control' id='inputYear' placeholder='Year' />
        </div>
      </div>
      <fieldset className='form-group'>
        <div className='row'>
          <legend className='col-form-label col-sm-2 pt-0'>Plot</legend>
          <div className='col-sm-10'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='gridRadios'
                id='OptionShort'
                value='short'
                // checked
              />
              <label className='form-check-label' htmlFor='OptionShort'>
                Short
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='gridRadios'
                id='OptionFull'
                value='full'
              />
              <label className='form-check-label' htmlFor='OptionFull'>
                Full
              </label>
            </div>
          </div>
        </div>
      </fieldset>
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
