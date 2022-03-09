import React from 'react'
import {useState} from "react"

function Search(props) {

    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
        props.searchFood(event.target.value)
    }

  return (
    <div className='boxMargin'>

        <label htmlFor="search">Search:</label>
        <input type="text" name="search" value={search} onChange={handleChange} />

    </div>
  )
}

export default Search