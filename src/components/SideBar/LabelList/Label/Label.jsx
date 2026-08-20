import ImgButton from '../../../General/ImgButton/ImgButton';

const Label = ({ titel }) => {
  return <ImgButton svg={'/label.png'} className='label' alt={titel}>
    <div className='text'>{titel}</div>
  </ImgButton>;
};

export default Label;