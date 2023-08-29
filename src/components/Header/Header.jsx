import React, { useState } from 'react'
import './Header.scss'
import logo  from '../../assets/logo-white.svg'
import eth  from '../../assets/eth.svg'
import bsc from '../../assets/bsc.svg'
import poligon from '../../assets/poligon.svg'

import {HiMiniBars3} from 'react-icons/hi2'
import {HiMiniUser} from 'react-icons/hi2'

const Header = () => {
  const [currentNet, setCurrentNet] = useState('');
  
  const handleSelection = (e) => {
    setCurrentNet(e.target.value);
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <a href="#"><img src={logo} alt="logo" className='logo'/></a>
            <div className='beta-label'>
                <p className='beta-label__text'>This project is beta.</p>
                <a className='beta-label__link'href="#">DYOR</a>
            </div>
        </div>

        <div className='header__right'>
            <button className='money-btn'>10.000$</button>

            <div className='net-list'>
                <label className={currentNet === 'eth' ? 'net__label net__label--active' : 'net__label'}>
                    <input type="radio" name="net" value="eth" checked={currentNet === 'eth'} onChange={(e) => handleSelection(e)} className='net__input' />
                    <img src={eth} alt="eth" className='net__icon'/>
                </label>

                <label className={currentNet === 'bsc' ? 'net__label net__label--active' : 'net__label'}>
                    <input type="radio" name="net" value="bsc"  checked={currentNet === 'bsc'} onChange={(e) => handleSelection(e)} className='net__input' />
                    <img src={bsc} alt="bsc" className='net__icon'/>
                </label>

                <label className={currentNet === 'poligon' ? 'net__label net__label--active' : 'net__label'}>
                    <input type="radio" name="net" value="poligon" checked={currentNet === 'poligon'} onChange={(e) => handleSelection(e)} className='net__input' />
                    <img src={poligon} alt="poligon" className='net__icon'/>
                </label>

            </div>

            <button className='profile-btn'>
                <p>0x40...76Ba</p>
                <HiMiniUser/>
            </button>

            <button className='burger-menu-btn'>
                <HiMiniBars3/>
            </button>
        </div>
    </div>
  )
}

export default Header