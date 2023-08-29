import './Banner.scss'

import New from '../New/New'
import { HiMiniArrowSmallRight } from 'react-icons/hi2'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='news-list'>
            <div className='news-list__left'>
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
            </div>
        </div>
    </div>
  )
}

export default Banner