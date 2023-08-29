import './New.scss'
import newImg1 from '../../assets/new-img-1.jpg'
import {HiArrowUpRight} from 'react-icons/hi2'

const New = () => {
  return (
    <div className='new'>
                    <div className='new__left'>
                        <div className='container'>
                            <div className='new__time'>
                                <p className='date'>Today</p>
                                <p>&#183;</p>
                                <p className='time'>15:24</p>
                            </div>

                            <h2 className='new__title'>Starknet is a decentralized Validity-Rollup often referred</h2>

                            <p className='new__text'>
                                Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup).
                                It operates as a Layer 2 network over Etherium. Starknet is a decentralized Validity-Rollup...
                            </p>
                        </div>
                      

                        <a href="#" className='new__link'>
                            <HiArrowUpRight/>
                        </a>
                    </div>

                    <div className='new__right'>
                        <img src={newImg1} alt="new's image"  className='new__image'/>
                    </div>
                </div>
  )
}

export default New