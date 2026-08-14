import ImgButton from '../../../General/ImgButton/ImgButton';

const Filter = ({ svg, titel, count, onClick }) => {
  return <ImgButton className={'filter'} alt={titel} text={titel} onClick={onClick} svg={svg}>
    <div className='body'>
      <div className='text'>{titel}</div>
      {count && <div className='count'>{count}</div>}
    </div>
  </ImgButton>;

};

export default Filter;