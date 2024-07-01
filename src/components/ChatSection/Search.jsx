import React from 'react'
import './chat.css';

const Search = () => {
    return (
        <div className='row mx-0'>
            <div className="col-12">
                <div className="input-group search-bar mb-2 rounded-5">
                    <input type="text" className='search-bar_input border-0 w-100 px-3 py-2 text-primary' placeholder='Search here...' />
                </div>
            </div>
        </div>
    )
}
export default Search