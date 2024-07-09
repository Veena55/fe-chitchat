import React from 'react'

const RecieveMsg = ({ recieveMsg }) => {
    return (
        <div className='row mx-0 w-100 px-2'>
            <div className="my-2 d-flex justify-content-end">
                <p className='mb-0 py-1 px-3 text-white  width-content bg-primary rounded-pill shadow-sm'>{recieveMsg}</p>
            </div>
        </div>
    )
}

export default RecieveMsg