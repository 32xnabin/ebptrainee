import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  console.log(setSearchTerm)
  return (
    <section className='section search'>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor='name' >Search</label>
          <input type='text' id='search' ref={searchValue} onChange={searchCocktail} placeholder="Search Cocktails ..."></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
