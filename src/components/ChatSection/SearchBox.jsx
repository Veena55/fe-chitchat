import React from 'react'

const SearchBox = ({ friends }) => {
    return (
        <>
            {(friends.length == 0) && <p>No Friends found</p>}
            {friends.map((friend, index) => <div key={index} className='searchBox row mx-0'>
                <div className="col-12 p-0 bg-white shadow-sm bg-white z-50">
                    <div className='p-2 d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>{friend.friend.name}</p>
                        <button className='border-0 bg-transparent text-primary'>Send Invite</button>
                    </div>
                </div>
            </div>

            )}
        </>

    )
}

export default SearchBox