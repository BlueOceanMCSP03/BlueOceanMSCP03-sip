import React from 'react'
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
            <button className={style.button}>Review</button>
            <button className={style.button}>Profile</button>
            <button className={style.button}>Nearby</button>
        </div>
    )
}
export default Navigation;