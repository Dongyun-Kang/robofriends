import React from 'react';


const SearchBox = ({ searchfiled, searchChange }) => {
  return (
    <div>
      <label>
        <input
          className='pa3 ma3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </label>
    </div>
  )
}

export default SearchBox;