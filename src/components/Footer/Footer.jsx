import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <a href="#" className='footer__link'>Airdrops</a>
        <a href="#" className='footer__link'>Referrals</a>
        <a href="#" className='footer__link'>Dashboard</a>
        <a href="#" className='footer__link'>News</a>
      </div>

      <p className='footer__text'>
        Stay tuned and check out our <a href="#" className='roadmap-link'>roadmap</a> for more details.
      </p>
    </div>
  )
}

export default Footer