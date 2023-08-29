import { useState } from 'react'

import './News.scss'

import New from '../New/New'
import { HiMiniArrowSmallRight } from 'react-icons/hi2'

const News = () => {
  const [filter, setFilter] = useState({theme: '', date: ''})
  
  const handleThemeSelection = (e) => {
    const newFilter = {
        ...filter,
        theme: e.target.value
    }
    setFilter(newFilter)
  }

  const handleDateSelection = (e) => {
    const newFilter = {
        ...filter,
        date: e.target.value
    }
    setFilter(newFilter)
  }

  return (
    <div className='news'>
        <div className='news__header'>

            <div className="news__filter">
                <div className='theme__filter'>
                    <label className={filter.theme === "Airdrops" ? 'filter__label filter__label--active' : 'filter__label'}>
                        <input type="radio" name='filter' value="Airdrops" checked={filter.theme === "Airdrops"} onChange={(e) => handleThemeSelection(e)} className='filter__input'/>
                        Airdrops
                    </label>

                    <label className={filter.theme === "Referrals" ? 'filter__label filter__label--active' : 'filter__label'}>
                        <input type="radio" name='filter' value="Referrals" checked={filter.theme === "Referrals"} onChange={(e) => handleThemeSelection(e)} className='filter__input'/>
                        Referrals
                    </label>

                    <label className={filter.theme === "Dashboard" ? 'filter__label filter__label--active' : 'filter__label'}>
                        <input type="radio" name='filter' value="Dashboard" checked={filter.theme === "Dashboard"} onChange={(e) => handleThemeSelection(e)} className='filter__input'/>
                        Dashboard
                    </label>
                </div>

                <div className='date__filter'>
                <label className={filter.date === "30 days" ? 'filter__label filter__label--active' : 'filter__label'}>
                        <input type="radio" name='date-filter' value="30 days" checked={filter.date === "30 days"} onChange={(e) => handleDateSelection(e)} className='filter__input'/>
                        30D
                    </label>

                    <label className={filter.date === "7 days" ? 'filter__label filter__label--active' : 'filter__label'}>
                        <input type="radio" name='date-filter' value="7 days" checked={filter.date === "7 days"} onChange={(e) => handleDateSelection(e)} className='filter__input'/>
                        7D
                    </label>
                </div>
            </div>
           

            <hr />

            <button className='deposit-btn'>Deposit</button>
        </div>

        <div className='news-list'>
            <div className='news-list__left'>
                <New/>
                <New/>
            </div>

            <div className='news-list__right'>
                <div className='new--short'>
                    <div className="container">
                        <div className='new__time'>
                            <p className='date'>Today</p>
                            <p>&#183;</p>
                            <p className='time'>15:24</p>
                        </div>

                        <h2 className='new__title'>Starknet is a decentralized Validity-Rollup often referred</h2>

                    </div>
                    
                    <a href="#" className='read-more-link'>
                        Read more
                        <HiMiniArrowSmallRight/>
                    </a>
                </div>

                <div className='new--short'>
                    <div className="container">
                        <div className='new__time'>
                            <p className='date'>Today</p>
                            <p>&#183;</p>
                            <p className='time'>15:24</p>
                        </div>

                        <h2 className='new__title'>Starknet is a decentralized Validity-Rollup often referred</h2>

                    </div>
                    
                    <a href="#" className='read-more-link'>
                        Read more
                        <HiMiniArrowSmallRight/>
                    </a>
                </div>

                <div className='new--short'>
                    <div className="container">
                        <div className='new__time'>
                            <p className='date'>Today</p>
                            <p>&#183;</p>
                            <p className='time'>15:24</p>
                        </div>

                        <h2 className='new__title'>Starknet is a decentralized Validity-Rollup often referred</h2>

                    </div>
                    
                    <a href="#" className='read-more-link'>
                        Read more
                        <HiMiniArrowSmallRight/>
                    </a>
                </div>

                <div className='new--short'>
                    <div className="container">
                        <div className='new__time'>
                            <p className='date'>Today</p>
                            <p>&#183;</p>
                            <p className='time'>15:24</p>
                        </div>

                        <h2 className='new__title'>Starknet is a decentralized Validity-Rollup often referred</h2>

                    </div>
                    
                    <a href="#" className='read-more-link'>
                        Read more
                        <HiMiniArrowSmallRight/>
                    </a>
                </div>
            </div>
        </div>

        <button className='show-more-btn'>Show more</button> 
    </div>
  )
}

export default News