import { useNavigate } from 'react-router';
import ImgButton from '../../General/ImgButton/ImgButton';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='mail-navbar'>
      <ImgButton svg={'/arrow-back.png'} alt={'Back'} onClick={() => {
        navigate(-1);
      }} />
      <ImgButton svg={'/archive.png'} alt={'Archive'} onClick={() => { }} />
      <ImgButton svg={'/spam.png'} alt={'Report Spam'} onClick={() => { }} />
      <ImgButton svg={'/delete.png'} alt={'Delete'} onClick={() => { }} />
    </div>
  );
};

export default Navbar;