import ImgButton from '../../General/ImgButton/ImgButton';

const Footer = () => {
  return (
    <div className='mail-footer'>
      <ImgButton className='reply' svg={'/reply.png'} alt={'Reply'} onClick={() => { }}>
        Reply
      </ImgButton>

      <ImgButton className='forward' svg={'/forward.png'} alt={'Reply'} onClick={() => { }}>
        Forward
      </ImgButton>
    </div>
  );
};

export default Footer;