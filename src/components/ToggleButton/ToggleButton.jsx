import { useEffect, useState } from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { IoSunny } from 'react-icons/io5'

const ToggleButton = () => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const setTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        loadTheme();
    }

    const loadTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setBodyTheme('dark');
            setCurrentTheme('dark');
        } else {
            setBodyTheme('light');
            setCurrentTheme('light');
        }
    }

    const setBodyTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
    }

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            loadTheme();
        } else {
            window.matchMedia('(prefers-color-scheme: dark)').matches ? setBodyTheme('dark') : setBodyTheme('light');
        }
    }, []);

    return (
        <div className='toggleButton'>
            {currentTheme === 'light' ?
                <BsMoonStarsFill size={20} onClick={setTheme} />
                :
                <IoSunny size={20} onClick={setTheme} />
            }
        </div>
    )
}

export default ToggleButton