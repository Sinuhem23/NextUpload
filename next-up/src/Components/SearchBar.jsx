import React, { useState, useContext } from 'react';
import { ListContext } from '../App';
import "../CSS/searchbar.css"

export default function SearchBar() {
  const [text, setText] = useState('');
  const context = useContext(ListContext);
  let term = context.term;

  const handleSubmit = (e) => {
    e.preventDefault();
    let setTerm = context.setTerm;
    setTerm(text);
    console.log('im HERE ' + text);
  };


  return (
    <div>
       {/* Search Bar */}
       <div className='search'>
        <form className='main_input' onSubmit={handleSubmit}>
          <input
            type='search'
            onChange={(e) => setText(e.target.value)}
            required
            placeholder='Search'
          />
          <button type='submit' className='searchBtn'>
            Search
          </button>
        </form>
      </div>

      {/* End of Search Bar */}
    </div>
  )
}
