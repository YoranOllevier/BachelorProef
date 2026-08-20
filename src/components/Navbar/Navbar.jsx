import ImgButton from '../General/ImgButton/ImgButton';
import Searchbar from './Searchbar/Searchbar';

const Navbar = ({ toggleIsOpen }) => {
  return <div className='navbar'>
    <div className='left'>
      <ImgButton svg={'/menu.svg'} alt="Main menu" onClick={toggleIsOpen} />
      <a href="/" className='home'>
        <img src="/logo.svg" alt="home" /> Mail
      </a>
    </div>
    <div className='middle'>
      <Searchbar />
    </div>
    <div className='right'>
      <ImgButton svg={'/help.svg'} alt="help" />
      <ImgButton svg={'/settings.svg'} alt="help" />
      <ImgButton svg={'/account.svg'} alt="account" />
    </div>

  </div>;
};

export default Navbar;