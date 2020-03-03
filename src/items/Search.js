import React, { useState, useContext } from 'react'
import EbayContext from '../context/Ebay/ebayContext'

const Search = () => {
  const ebayContext = useContext(EbayContext)

  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
    //using e.target name allows you to access multiple inputs without having to have different onchange functions
  }
  const { searchItems, clearItems, items } = ebayContext

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      alert('Please enter something')
    } else {
      searchItems(text)
      setText('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Items...'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='Search'
        ></input>
      </form>
      {items.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearItems}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
