import React from 'react'

const Search = (props) => {
    return (
        <div>
            <div className = "active-cyan">
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Book by Title" onChange={props.onChange}  aria-label="Search"/>
            </div>

        </div>
    )
}

export default Search
