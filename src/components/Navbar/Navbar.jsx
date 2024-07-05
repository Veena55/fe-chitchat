import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import { FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='row mx-0'>
            <div className="col-12 p-2 bg-primary shadow-lg d-flex justify-content-end gap-3 align-items-center">
                <ToggleButton />
                <Link to='/invite'><button className='btn btn-white text-capitalize shadow fs-6'><FaUserPlus className="text-primary me-2" size={20} />  Invite</button></Link>
            </div>
        </div>
    )
}

export default Navbar