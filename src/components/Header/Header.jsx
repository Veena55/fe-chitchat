import chat from '../../assets/chat.svg';
import '../Header/Header.css';

const Header = () => {
    return (
        <>
            <div className="row mx-0 justify-content-center my-5">
                <div className="col-lg-8 bg-white shadow-sm">
                    <div className="login-bg">
                        <div className='col-lg-6'>
                            <img src={chat} alt="" width={500} />
                        </div>
                        <div className='bg-white p-5 rounded-5 col-lg-6'>
                            <form>
                                <div className='form-group'>
                                    <input type="text" className='form-control shadow-sm' placeholder='Enter Email Address' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type="text" className='form-control shadow-sm' placeholder='Enter Password' />
                                </div>
                                <div className="mt-3 text-center">
                                    <input type="submit" className='btn btn-primary' value='Sign in' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;